import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/Footer";

const titillium = Titillium_Web({ weight: ['200', '300', '400', '600', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ianduhamel.tech",
  description: "Code enthusiast with a knack for explaining complex ideas in simple ways. I love sharing my tech journey and learning from others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        titillium.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
