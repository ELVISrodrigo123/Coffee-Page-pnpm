import type { Metadata } from "next";
import './globals.css';
import { AppThemeProvider } from "./lib/AppThemeProvider";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js + MUI custom theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head></head>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
