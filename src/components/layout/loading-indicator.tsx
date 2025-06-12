"use client";

import { useState, useEffect, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

const FullPageSpinner = () => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm">
    <Loader2 className="h-16 w-16 animate-spin text-primary" />
  </div>
);

interface LoadingIndicatorProps {
  children: ReactNode;
}

export default function LoadingIndicator({ children }: LoadingIndicatorProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This effect runs once on the client after the component mounts and JavaScript is active
    setIsLoading(false);
  }, []); // Empty dependency array means it runs once on mount

  if (isLoading) {
    return <FullPageSpinner />;
  }

  return <>{children}</>;
}
