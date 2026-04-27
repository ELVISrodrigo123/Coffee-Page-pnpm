'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from '../theme';
import { lightColors } from '../theme';

// ─── AppThemeProvider ─────────────────────────────────────────────────────────
// Wrapper listo para SSR con Next.js App Router.
// Cuando agregues el toggle dark/light pasás los darkColors acá.
// ─────────────────────────────────────────────────────────────────────────────

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  // Por ahora siempre light. Luego usarás useState + localStorage para el toggle.
  const theme = createAppTheme(lightColors);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
