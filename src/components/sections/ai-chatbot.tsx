
"use client";

import { useRef, useEffect, useState, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User, Loader2, Send, MessageSquare, UploadCloud, XCircle, Paperclip } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useChatWidget, type FilePayload } from '@/contexts/chat-widget-context';
import { useToast } from '@/hooks/use-toast';
import type { PDFDocumentProxy } from 'pdfjs-dist';

let pdfjsLib: any = null;
if (typeof window !== 'undefined') {
  import('pdfjs-dist/build/pdf').then(lib => {
    pdfjsLib = lib;
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`;
  });
}

function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default function AIChatbot() {
  const { 
    messages, 
    currentInput, 
    isChatLoading, 
    setCurrentInputText, 
    handleSendMessage 
  } = useChatWidget();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processedFileData, setProcessedFileData] = useState<FilePayload | null>(null);
  const [isFileProcessing, setIsFileProcessing] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);


  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth'});
    }
  }, [messages]);

  const handleFileSelection = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      handleClearFile();
      return;
    }

    setSelectedFile(file);
    setProcessedFileData(null);
    setFileError(null);
    setImagePreviewUrl(null);
    setIsFileProcessing(true);

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setFileError("File is too large (max 5MB).");
        toast({ title: "File Too Large", description: "Please select a file smaller than 5MB.", variant: "destructive" });
        setSelectedFile(null);
        setIsFileProcessing(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
    }

    try {
      if (file.type === "application/pdf") {
        if (!pdfjsLib) throw new Error("PDF library not loaded. Please try again.");
        const arrayBuffer = await file.arrayBuffer();
        const pdf: PDFDocumentProxy = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          fullText += textContent.items.map((item: any) => item.str).join(" ") + "\n";
        }
        setProcessedFileData({ type: 'pdf', content: fullText, name: file.name });
        toast({ title: "PDF Processed", description: "Ready to send with your message." });
      } else if (['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUri = reader.result as string;
          setProcessedFileData({ type: 'image', content: dataUri, name: file.name });
          setImagePreviewUrl(dataUri);
          toast({ title: "Image Loaded", description: "Ready to send with your message." });
        };
        reader.onerror = () => { throw new Error("Failed to read image file."); };
        reader.readAsDataURL(file);
      } else {
        throw new Error("Unsupported file type. Please upload PDF, JPG, PNG, or WEBP.");
      }
    } catch (error: any) {
      setFileError(error.message || "Error processing file.");
      toast({ title: "File Processing Error", description: error.message || "Could not process file.", variant: "destructive" });
      setSelectedFile(null);
    } finally {
      setIsFileProcessing(false);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setProcessedFileData(null);
    setFileError(null);
    setImagePreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim() && !processedFileData) return; // Require either text or a processed file
    
    await handleSendMessage(currentInput, processedFileData || undefined);
    handleClearFile(); // Clear file after sending
  };

  return (
    <Card className="w-full max-w-lg shadow-2xl rounded-xl">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center font-headline text-xl">
          <Bot className="mr-2 h-6 w-6 text-primary" />
          AI-powered Home Buying Advisor
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-80 p-4" ref={scrollAreaRef}>
          {messages.length === 0 && !selectedFile && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <MessageSquareIcon className="w-12 h-12 mb-2" />
              <p>Ask me anything about financing a house!</p>
              <p className="text-xs">e.g., "What is a good credit score for a mortgage?"</p>
              <p className="text-xs mt-1">Or upload a document for analysis.</p>
            </div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 mb-4 ${
                message.type === 'user' ? 'justify-end' : ''
              }`}
            >
              {message.type === 'ai' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot size={18}/>
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-3 rounded-lg max-w-[75%] ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-secondary text-secondary-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                {message.type === 'user' && message.fileName && (
                  <p className="text-xs opacity-70 mt-1 border-t border-primary-foreground/20 pt-1">
                    Context: {message.fileName}
                  </p>
                )}
              </div>
              {message.type === 'user' && (
                 <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    <User size={18}/>
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isChatLoading && messages[messages.length -1]?.type === 'user' && (
            <div className="flex items-start space-x-3 mb-4">
              <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot size={18}/>
                  </AvatarFallback>
              </Avatar>
              <div className="p-3 rounded-lg bg-secondary text-secondary-foreground rounded-bl-none">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t pt-3 pb-3 flex flex-col items-start gap-2">
        {selectedFile && (
          <div className="w-full p-2 text-xs bg-muted rounded-md flex justify-between items-center">
            <div className="flex items-center gap-2 overflow-hidden">
                {imagePreviewUrl && (
                    <Image src={imagePreviewUrl} alt="Preview" width={24} height={24} className="rounded object-cover h-6 w-6"/>
                )}
                {!imagePreviewUrl && (selectedFile.type === "application/pdf" ? <Paperclip className="h-4 w-4 text-muted-foreground"/> : <UploadCloud className="h-4 w-4 text-muted-foreground"/>) }
                <span className="truncate text-muted-foreground" title={selectedFile.name}>{selectedFile.name}</span>
                {isFileProcessing && <Loader2 className="h-3 w-3 animate-spin text-primary"/>}
            </div>
            <Button variant="ghost" size="icon" onClick={handleClearFile} disabled={isChatLoading || isFileProcessing} className="h-6 w-6">
              <XCircle className="h-4 w-4 text-destructive"/>
            </Button>
          </div>
        )}
        {fileError && <p className="text-xs text-destructive px-1">{fileError}</p>}

        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Button 
            type="button" 
            variant="outline" 
            size="icon" 
            onClick={() => fileInputRef.current?.click()} 
            disabled={isChatLoading || isFileProcessing || !!selectedFile}
            aria-label="Upload document"
          >
            <UploadCloud className="h-5 w-5"/>
          </Button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileSelection} 
            className="hidden" 
            accept=".pdf,image/jpeg,image/png,image/webp"
            disabled={isChatLoading || isFileProcessing || !!selectedFile}
          />
          <Input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInputText(e.target.value)}
            placeholder={selectedFile ? "Add a question about the document..." : "Ask a question..."}
            className="flex-1"
            disabled={isChatLoading || isFileProcessing}
            aria-label="Ask the chatbot a question"
          />
          <Button 
            type="submit" 
            disabled={isChatLoading || isFileProcessing || (!currentInput.trim() && !processedFileData)} 
            size="icon" 
            aria-label="Send message"
          >
            {isChatLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5"/>}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
