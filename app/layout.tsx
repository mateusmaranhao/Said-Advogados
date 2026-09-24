import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";
import { getLegalServiceSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#330505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: "Said & Said Advogados Associados | Advocacia em Campinas",
    template: "%s | Said & Said Advogados Associados",
  },
  description:
    "Said & Said Advogados Associados: escritório de advocacia em Campinas com mais de 50 anos de atuação, incluindo Direito Penal, Trabalhista, Civil, Família, Tributário e Administrativo.",
  keywords: [
    "escritório de advocacia em Campinas",
    "advogado em Campinas",
    "advocacia em Campinas",
    "escritório de advocacia Campinas SP",
    "advogado criminalista em Campinas",
    "advocacia criminal em Campinas",
    "Direito Penal em Campinas",
    "Direito Trabalhista em Campinas",
    "Direito Tributário em Campinas",
    "Direito Administrativo em Campinas",
    "Direito de Família em Campinas",
  ],
  authors: [{ name: "Said & Said Advogados Associados" }],
  creator: "Said & Said Advogados Associados",
  publisher: "Said & Said Advogados Associados",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Said & Said Advogados Associados | Advocacia em Campinas",
    description:
      "Escritório de advocacia tradicional em Campinas com mais de cinco décadas de atuação jurídica estratégica, técnica e responsável.",
    url: SITE_CONFIG.baseUrl,
    siteName: "Said & Said Advogados Associados",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Said & Said Advogados Associados | Advocacia em Campinas",
    description:
      "Escritório de advocacia tradicional em Campinas com mais de cinco décadas de atuação jurídica estratégica, técnica e responsável.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-[#BAAFA6] text-[#330505] antialiased selection:bg-[#330505] selection:text-[#FFFFFF] font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
