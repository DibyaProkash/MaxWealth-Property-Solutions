
"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input as ShadcnInput } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { analyzeDocument, type DocumentAnalyzerInput, type DocumentAnalyzerOutput } from "@/ai/flows/document-analyzer-flow";
import { generateFinancialPlan, type PersonalizedFinancialPlanInput, type PersonalizedFinancialPlanOutput } from "@/ai/flows/personalized-financial-plan-flow";
import { summarizeMarketTrends, type MarketTrendSummarizerInput, type MarketTrendSummarizerOutput } from "@/ai/flows/market-trend-summarizer-flow";
import QuizSection from '@/components/sections/quiz-section';
import AnimatedSection from '@/components/layout/animated-section';
import Link from "next/link";
import { ArrowLeft, FileText, BrainCircuit, TrendingUp, Loader2, Wand2, UserCheck, BarChart3, UploadCloud, XCircle, AlertTriangle } from "lucide-react";
import type { PDFDocumentProxy } from 'pdfjs-dist';
import Footer from '@/components/layout/footer';

let pdfjsLib: any = null;
if (typeof window !== 'undefined') {
  import('pdfjs-dist/build/pdf').then(lib => {
    pdfjsLib = lib;
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`;
  });
}

const BetaDisclaimer = () => (
  <div className="mt-10 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-sm text-destructive flex items-start">
    <AlertTriangle className="h-4 w-4 mr-2.5 mt-0.5 flex-shrink-0 text-destructive" />
    <div>
      <span className="font-semibold">BETA Features:</span> The AI-powered tools and quiz are currently in beta. AI can make mistakes, and the information provided is for general guidance only. Always consult with a qualified MaxWealth PS financial advisor before making any financial decisions.
    </div>
  </div>
);

export default function AiToolsPage() {
  const { toast } = useToast();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedPdfText, setExtractedPdfText] = useState<string | null>(null);
  const [pdfProcessingError, setPdfProcessingError] = useState<string | null>(null);
  const [isProcessingPdf, setIsProcessingPdf] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [financialSituation, setFinancialSituation] = useState("");
  const [financialPlan, setFinancialPlan] = useState<string | null>(null);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  const [marketTrendSummary, setMarketTrendSummary] = useState<string | null>(null);
  const [isFetchingTrends, setIsFetchingTrends] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setExtractedPdfText(null);
      setAnalysisResult(null);
      setPdfProcessingError(null);
      setIsProcessingPdf(true);
      try {
        if (!pdfjsLib) {
          throw new Error("PDF library not loaded yet. Please try again in a moment.");
        }
        const arrayBuffer = await file.arrayBuffer();
        const pdf: PDFDocumentProxy = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          fullText += textContent.items.map((item: any) => item.str).join(" ") + "\n";
        }
        setExtractedPdfText(fullText);
        toast({
          title: "PDF Processed",
          description: "PDF content extracted. Ready to analyze.",
        });
      } catch (error: any) {
        console.error("Error processing PDF:", error);
        setPdfProcessingError(`Failed to process PDF: ${error.message || "Unknown error"}. Please ensure it's a valid PDF.`);
        toast({
          title: "PDF Processing Error",
          description: `Could not process PDF. ${error.message || "Unknown error"}`,
          variant: "destructive",
        });
      } finally {
        setIsProcessingPdf(false);
      }
    } else {
      setSelectedFile(null);
      setExtractedPdfText(null);
      setPdfProcessingError(file ? "Please select a valid PDF file." : null);
      if (file) {
        toast({ title: "Invalid File", description: "Please select a PDF file.", variant: "destructive"});
      }
    }
  };

  const handleAnalyzeDocument = async () => {
    if (!extractedPdfText && !selectedFile) {
      toast({ title: "Input Required", description: "Please select a PDF file to analyze.", variant: "destructive"});
      return;
    }
    if (!extractedPdfText && selectedFile && !isProcessingPdf) {
        toast({ title: "Processing Error", description: "PDF text not extracted. Please re-select the file or check for errors.", variant: "destructive"});
        return;
    }
    if (!extractedPdfText) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);
    try {
      const input: DocumentAnalyzerInput = { documentText: extractedPdfText };
      const result: DocumentAnalyzerOutput = await analyzeDocument(input);
      setAnalysisResult(result.analysis);
      toast({ title: "Analysis Complete", description: "Document analysis finished successfully."});
    } catch (error) {
      console.error("Error analyzing document:", error);
      setAnalysisResult("Failed to analyze document. Please try again.");
      toast({ title: "Analysis Failed", description: "An error occurred during document analysis.", variant: "destructive"});
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRemovePdf = () => {
    setSelectedFile(null);
    setExtractedPdfText(null);
    setAnalysisResult(null);
    setPdfProcessingError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast({ title: "PDF Cleared", description: "The selected PDF and its analysis have been cleared."});
  };

  const handleGeneratePlan = async () => {
    if (!financialSituation.trim()) {
      toast({ title: "Input Required", description: "Please describe your financial situation and goals.", variant: "destructive" });
      return;
    }
    setIsGeneratingPlan(true);
    setFinancialPlan(null);
    try {
      const input: PersonalizedFinancialPlanInput = { userSituation: financialSituation };
      const result: PersonalizedFinancialPlanOutput = await generateFinancialPlan(input);
      setFinancialPlan(result.plan);
      toast({ title: "Plan Generated", description: "Your basic financial plan has been generated."});
    } catch (error) {
      console.error("Error generating financial plan:", error);
      setFinancialPlan("Failed to generate financial plan. Please try again.");
      toast({ title: "Plan Generation Failed", description: "An error occurred while generating your plan.", variant: "destructive"});
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  const handleFetchTrends = async () => {
    setIsFetchingTrends(true);
    setMarketTrendSummary(null);
    try {
      const result: MarketTrendSummarizerOutput = await summarizeMarketTrends();
      setMarketTrendSummary(result.summary);
      toast({ title: "Market Trends Loaded", description: "Simulated market trends have been loaded."});
    } catch (error) {
      console.error("Error fetching market trends:", error);
      setMarketTrendSummary("Failed to load market trends. Please try again.");
      toast({ title: "Trend Loading Failed", description: "An error occurred while loading market trends.", variant: "destructive"});
    } finally {
      setIsFetchingTrends(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-8 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <Button variant="outline" className="mb-6" asChild>
                <Link href="/resources">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resources
                </Link>
              </Button>
              <div className="text-center">
                  <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <BrainCircuit className="h-10 w-10 text-primary" />
                  </div>
                  <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                  AI-Powered Insights & Home Readiness
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Explore intelligent tools to analyze documents, generate basic financial plans, get market trends, and assess your home buying readiness.
                  </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-100">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
              <div className="space-y-8">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
                  <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
                      <div className="flex items-center gap-3"><div className="p-2 bg-primary/10 rounded-md"><FileText className="h-6 w-6 text-primary" /></div><CardTitle className="font-headline text-lg text-primary">AI Document Analyzer</CardTitle></div>
                      <Badge variant="outline" className="border-destructive text-destructive">BETA</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-grow flex flex-col">
                      <CardDescription className="mb-3 flex-shrink-0">Upload a PDF document (e.g., redacted loan estimate) to get an AI-powered summary and explanation of key terms.</CardDescription>
                      <div className="space-y-1.5 flex-shrink-0">
                      <div className="flex items-center gap-2">
                          <Button asChild variant="outline" size="sm" className="flex-grow justify-start text-muted-foreground hover:text-primary"><label htmlFor="pdf-upload" className="cursor-pointer flex items-center gap-2"><UploadCloud className="h-5 w-5" />{selectedFile ? `Selected: ${selectedFile.name.substring(0,15)}${selectedFile.name.length > 15 ? '...' : ''}` : "Upload PDF"}</label></Button>
                          {selectedFile && (<Button variant="ghost" size="icon" onClick={handleRemovePdf} aria-label="Remove PDF" className="text-destructive hover:bg-destructive/10"><XCircle className="h-5 w-5" /></Button>)}
                      </div>
                      <ShadcnInput id="pdf-upload" ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileChange} className="hidden" disabled={isProcessingPdf || isAnalyzing}/>
                      <div className="text-xs text-muted-foreground">For example: loan estimates, disclosures, etc. Max 5MB.</div>
                      </div>
                      {selectedFile && !isProcessingPdf && !pdfProcessingError && !extractedPdfText && (<p className="text-xs text-primary/80 flex-shrink-0">File selected. Click "Analyze" to process.</p>)}
                      {isProcessingPdf && <p className="text-xs text-primary flex items-center flex-shrink-0"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing PDF...</p>}
                      {pdfProcessingError && (<p className="text-xs text-destructive flex-shrink-0">{pdfProcessingError}</p>)}
                      <div className="flex-grow mt-auto">{analysisResult && (<ScrollArea className="h-32 rounded-md border p-3 bg-muted/30 text-sm"><pre className="whitespace-pre-wrap break-words font-body">{analysisResult}</pre></ScrollArea>)}</div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto"><Button onClick={handleAnalyzeDocument} disabled={isAnalyzing || isProcessingPdf || !extractedPdfText || !!pdfProcessingError} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{isAnalyzing ? <Loader2 className="animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}Analyze Document</Button></div>
                  </Card>

                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
                  <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
                      <div className="flex items-center gap-3"><div className="p-2 bg-primary/10 rounded-md"><BrainCircuit className="h-6 w-6 text-primary" /></div><CardTitle className="font-headline text-lg text-primary">Personalized Financial Plan AI</CardTitle></div>
                      <Badge variant="outline" className="border-destructive text-destructive">BETA</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-grow flex flex-col">
                      <CardDescription className="mb-1 flex-shrink-0">Describe your financial situation and goals to receive an AI-generated basic financial plan with actionable next steps.</CardDescription>
                      <p className="text-xs text-muted-foreground mb-3 flex-shrink-0">Future enhancement: Optionally use data from calculators to pre-fill parts of your situation.</p>
                      <Textarea placeholder="E.g., Stable income, $10k saved, some student debt. Goal: buy first home in 1-2 years..." value={financialSituation} onChange={(e) => setFinancialSituation(e.target.value)} rows={5} className="bg-background/70 flex-shrink-0" disabled={isGeneratingPlan}/>
                      <div className="flex-grow mt-auto">{financialPlan && (<ScrollArea className="h-32 rounded-md border p-3 bg-muted/30 text-sm"><pre className="whitespace-pre-wrap break-words font-body">{financialPlan}</pre></ScrollArea>)}</div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto"><Button onClick={handleGeneratePlan} disabled={isGeneratingPlan || !financialSituation.trim()} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{isGeneratingPlan ? <Loader2 className="animate-spin" /> : <UserCheck className="mr-2 h-4 w-4" />}Generate My Basic Plan</Button></div>
                  </Card>

                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
                  <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
                      <div className="flex items-center gap-3"><div className="p-2 bg-primary/10 rounded-md"><TrendingUp className="h-6 w-6 text-primary" /></div><CardTitle className="font-headline text-lg text-primary">AI Market Trend Summarizer</CardTitle></div>
                      <Badge variant="outline" className="border-destructive text-destructive">BETA</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-grow flex flex-col">
                      <CardDescription className="mb-3 flex-shrink-0">Get a (simulated) AI-powered summary of current general real estate market trends to help inform your decisions.</CardDescription>
                      <div className="flex-grow mt-auto">
                      {marketTrendSummary && (<ScrollArea className="h-48 rounded-md border p-3 bg-muted/30 text-sm"><pre className="whitespace-pre-wrap break-words font-body">{marketTrendSummary}</pre></ScrollArea>)}
                      {!marketTrendSummary && !isFetchingTrends && (<div className="flex flex-col items-center justify-center h-full text-muted-foreground p-4 text-center"><BarChart3 className="w-12 h-12 mb-2 opacity-50" /><p className="text-sm">Click the button below to load simulated market trends.</p></div>)}
                      </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto"><Button onClick={handleFetchTrends} disabled={isFetchingTrends} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{isFetchingTrends ? <Loader2 className="animate-spin" /> : <BarChart3 className="mr-2 h-4 w-4" />}Get Simulated Trends</Button></div>
                  </Card>
              </div>

              <div className="sticky top-24"> 
                  <QuizSection />
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                  Future enhancement: We're working on allowing data from the calculators to optionally pre-fill relevant quiz fields.
                  </p>
              </div>
              </div>
              
              <BetaDisclaimer />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
