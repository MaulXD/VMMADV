import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FraudAlertModal } from "@/components/shared/FraudAlertModal";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";
import { createMetadata, legalServiceJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = createMetadata({
  title: siteConfig.shortName,
  description: siteConfig.description,
  keywords: [
    "advogado Maceió",
    "precatórios Alagoas",
    "advogado tributário",
    "direito público",
    "ação civil pública",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceJsonLd),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FraudAlertModal />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
