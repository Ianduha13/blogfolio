import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/Footer";
import { PHProvider } from "@/components/providers/posthog-provider";
import PostHogPageView from "@/components/PHPageView";
import { Suspense } from "react";

const titillium = Titillium_Web({ weight: ['200', '300', '400', '600', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ian Duhamel Blog",
  description: "Code enthusiast with a knack for explaining complex ideas in simple ways. I love sharing my tech journey and learning from others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" >
      <PHProvider>
        <body className={cn(
          "min-h-screen flex flex-col font-sans antialiased dark:bg-[#121212]",
          titillium.className
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Suspense fallback={null} >
            <PostHogPageView />
          </Suspense>
        </body>
      </PHProvider>
    </html>
  );
}
