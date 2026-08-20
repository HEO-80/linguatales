import type { Metadata } from "next";
import "./globals.css";
import { AppStateProvider } from "@/state/AppStateContext";
import { ThemeProvider } from "@/theme/ThemeContext";

export const metadata: Metadata = {
  title: "LinguaTales",
  description: "Practica idiomas con historias cortas, gramática en contexto y evaluación de pronunciación.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout <head>, applies to every page, not a single-page pages-router font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Karla:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppStateProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}
