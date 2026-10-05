import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyperthinksys.com"),
  title: "AI in a Box | Private Enterprise AI Platform | HyperThink Systems",
  description:
    "A pre-integrated private AI platform that brings compute, models, data integration, and enterprise control into one deployable environment. On-premise or self-hosted.",
  alternates: { canonical: "/ai-in-a-box" },
  openGraph: {
    title: "AI in a Box | Private Enterprise AI Platform | HyperThink Systems",
    description:
      "A pre-integrated private AI platform that brings compute, models, data integration, and enterprise control into one deployable environment.",
    url: "/ai-in-a-box",
    siteName: "HyperThink Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
