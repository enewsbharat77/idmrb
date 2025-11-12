import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Font imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // improves performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO Metadata
export const metadata = {
  title: {
    default: "Indian Digital Media Regulatory Board (IDMRB)",
    template: "%s | IDMRB",
  },
  description:
    "Official website of the Indian Digital Media Regulatory Board (IDMRB) — empowering responsible journalism in the digital era. Discover initiatives, events, and the Next Media Frontier 2026 Conclave.",
  keywords: [
    "IDMRB",
    "Digital Media",
    "Journalism India",
    "AI in Media",
    "Next Media Frontier 2026",
    "Media Regulation",
    "Indian Digital Media Board",
    "Ethical Journalism",
    "Media Governance",
  ],
  authors: [{ name: "Indian Digital Media Regulatory Board (IDMRB)" }],
  creator: "IDMRB",
  publisher: "IDMRB",
  metadataBase: new URL("https://www.idmrb.org"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.idmrb.org",
    title: "Indian Digital Media Regulatory Board (IDMRB)",
    description:
      "Empowering responsible journalism and ethical innovation in India's digital media ecosystem.",
    siteName: "IDMRB",
    images: [
      {
        url: "/og-image.jpg", // replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "IDMRB - Empowering Responsible Journalism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@idmrb_official", // if you have one
    title: "Indian Digital Media Regulatory Board (IDMRB)",
    description:
      "Building a transparent, ethical, and innovative digital media ecosystem for India.",
    images: ["/og-image.jpg"],
  },icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico?",
  apple: "/favicon.ico",
},
  alternates: {
    canonical: "https://www.idmrb.org",
  },
};

// ✅ Schema.org (JSON-LD structured data)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Indian Digital Media Regulatory Board (IDMRB)",
  url: "https://www.idmrb.org",
  logo: "https://www.idmrb.org/logo.png",
  sameAs: [
    "https://twitter.com/idmrb_official",
    "https://linkedin.com/company/idmrb",
  ],
  description:
    "The Indian Digital Media Regulatory Board (IDMRB) empowers responsible journalism and ethical digital media innovation in India.",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Mukesh S. Dadhich",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@idmrb.org",
    contactType: "Customer Support",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
