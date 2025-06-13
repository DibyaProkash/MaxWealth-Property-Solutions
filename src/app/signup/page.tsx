
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, sendEmailVerification, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Home, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

interface PasswordCriterion {
  id: string;
  regex: RegExp;
  label: string;
  met: boolean;
}

const initialPasswordCriteria: PasswordCriterion[] = [
  { id: 'length', regex: /.{8,}/, label: "At least 8 characters", met: false },
  { id: 'uppercase', regex: /[A-Z]/, label: "At least one uppercase letter", met: false },
  { id: 'lowercase', regex: /[a-z]/, label: "At least one lowercase letter", met: false },
  { id: 'number', regex: /[0-9]/, label: "At least one number", met: false },
  { id: 'special', regex: /[^A-Za-z0-9]/, label: "At least one special character", met: false },
];

function PasswordStrengthIndicator({ criteria }: { criteria: PasswordCriterion[] }) {
  return (
    <div className="space-y-1.5 mt-3 p-3 border rounded-md bg-muted/50">
      <p className="text-xs font-medium text-muted-foreground mb-1">Password must contain:</p>
      {criteria.map(criterion => (
        <div key={criterion.id} className={`flex items-center text-xs ${criterion.met ? 'text-green-600 dark:text-green-400' : 'text-destructive'}`}>
          {criterion.met ? <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" /> : <XCircle className="mr-1.5 h-3.5 w-3.5" />}
          {criterion.label}
        </div>
      ))}
    </div>
  );
}

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState<PasswordCriterion[]>(initialPasswordCriteria.map(c => ({...c}))); // Deep copy
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const newCriteria = passwordCriteria.map(criterion => ({
      ...criterion,
      met: criterion.regex.test(password)
    }));
    setPasswordCriteria(newCriteria);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const allCriteriaMet = passwordCriteria.every(criterion => criterion.met);
  const passwordsMatch = password === confirmPassword;
  const canSubmit = allCriteriaMet && passwordsMatch && email.length > 0;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!passwordsMatch) {
      setError("Passwords do not match.");
      toast({ title: "Signup Error", description: "Passwords do not match.", variant: "destructive" });
      return;
    }

    if (!allCriteriaMet) {
      setError("Password does not meet all criteria.");
      toast({ title: "Signup Error", description: "Password does not meet all criteria.", variant: "destructive" });
      return;
    }
    
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await sendEmailVerification(user);
        toast({
          title: "Signup Successful! Please Verify Your Email",
          description: "A verification email has been sent. Please check your inbox (and spam folder) and click the link to verify your account before logging in.",
          duration: 10000, // Longer duration for this important message
        });
      } else {
         toast({
          title: "Signup Successful (No User Object)",
          description: "Your account has been created. You can now login.",
        });
      }
      router.push("/login"); 
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError("This email address is already in use. Please try a different email or login.");
      } else {
        setError(err.message || "Failed to create account. Please try again.");
      }
      toast({
        title: "Signup Failed",
        description: err.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl text-primary">Create Account</CardTitle>
          <CardDescription>Join MaxWealth PS to manage your financial journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={isLoading}
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(password.length > 0)} // Keep visible if password has content
                placeholder="••••••••"
                required
                disabled={isLoading}
                autoComplete="new-password"
              />
              {isPasswordFocused && <PasswordStrengthIndicator criteria={passwordCriteria} />}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
                autoComplete="new-password"
              />
              {password.length > 0 && confirmPassword.length > 0 && !passwordsMatch && (
                 <div className="flex items-center text-xs text-destructive mt-1">
                    <AlertTriangle className="mr-1.5 h-3.5 w-3.5" />
                    Passwords do not match.
                 </div>
              )}
            </div>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
            <Button type="submit" className="w-full shadow-lg" disabled={isLoading || !canSubmit}>
              {isLoading ? <Loader2 className="animate-spin" /> : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-sm space-y-3">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Login
            </Link>
          </p>
          <Link href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <Home className="mr-1.5 h-4 w-4" />
            Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

    