'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

// Suppress React 19 "Encountered a script tag" false positive warning from next-themes
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const orig = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return;
    }
    // Type casting because TypeScript gets confused with apply spread
    (orig as any).apply(console, args);
  };
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
