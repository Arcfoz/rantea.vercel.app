import type { Metadata } from "next";
import { Inter, Livvic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

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
          {children}
        </ThemeProvider>
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
