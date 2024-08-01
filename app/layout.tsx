import type { Metadata } from "next";

import "./globals.css";

import { Toaster } from "sonner";
import "@fontsource-variable/playfair-display";

import "@fontsource-variable/dm-sans";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beauty",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
