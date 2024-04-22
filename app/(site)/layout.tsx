import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AlertBanner from "./alert-banner";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "Rantea",
    template: "%s | Rantea",
  },
  description: "Uji Mutu Daun Teh Melalui Gengaman Anda, deteksi kualitas uji mutu bubuk teh hitam ortodoks, di manapun dan kapan pun!",
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.className} selection:bg-primary selection:text-primary-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {draftMode().isEnabled && <AlertBanner />}
          {children}
          {draftMode().isEnabled && <VisualEditing />}
          <SpeedInsights />
        </ThemeProvider>
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
