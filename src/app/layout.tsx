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
  title: "Sovereign AI Infrastructure & Platform | HyperThink Systems",
  description:
    "Enterprise sovereign AI infrastructure, governance, and platform for regulated industries across India and the GCC. Your AI. Your data. Your infrastructure.",
  alternates: { canonical: "/sovereign-ai" },
  openGraph: {
    title: "Sovereign AI Infrastructure & Platform | HyperThink Systems",
    description:
      "Enterprise sovereign AI infrastructure, governance, and platform for regulated industries across India and the GCC.",
    url: "/sovereign-ai",
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
