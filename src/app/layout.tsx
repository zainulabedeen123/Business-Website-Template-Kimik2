import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Nexus Agents - AI Agents Development & Business Process Automation",
    template: "%s | Nexus Agents"
  },
  description: "Empower your business with custom AI agents and automation solutions. Scale faster, cut costs, and eliminate repetitive workflows with Nexus Agents.",
  keywords: [
    "AI agents",
    "business automation",
    "process automation",
    "AI development",
    "workflow automation",
    "custom AI solutions",
    "Zapier integrations",
    "AI chatbots",
    "business intelligence"
  ],
  authors: [{ name: "Nexus Agents" }],
  creator: "Nexus Agents",
  publisher: "Nexus Agents",
  metadataBase: new URL("https://nexusagents.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusagents.com",
    siteName: "Nexus Agents",
    title: "Nexus Agents - AI Agents Development & Business Process Automation",
    description: "Empower your business with custom AI agents and automation solutions. Scale faster, cut costs, and eliminate repetitive workflows.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus Agents - AI Agents Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexusagents",
    creator: "@nexusagents",
    title: "Nexus Agents - AI Agents Development & Business Process Automation",
    description: "Empower your business with custom AI agents and automation solutions. Scale faster, cut costs, and eliminate repetitive workflows.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
