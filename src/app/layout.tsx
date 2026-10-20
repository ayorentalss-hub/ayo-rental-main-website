import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import MobileNavigation from "@/components/MobileNavigation";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYO Rental | The app is coming soon",
  description:
    "The AYO Rental app is coming soon in India. Get in touch with our team and be among the first to hear when it launches.",
  applicationName: "AYO Rental",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AYO Rental",
  },
  icons: {
    icon: [
      { url: "/ayo-icon.svg", type: "image/svg+xml" },
      { url: "/ayo-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/ayo-icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#e60012",
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ServiceWorkerRegistration />
        <header className="site-header">
          <div className="header-contact-bar">
            <div className="header-contact-inner page-width">
              <span><MapPin size={13} /> Vrindavan City, near Jaipuria, Agra, Uttar Pradesh 282001, India</span>
              <a href="tel:9690601958"><Phone size={13} /> 9690601958</a>
              <a href="mailto:ayorentalss@gmail.com"><Mail size={13} /> ayorentalss@gmail.com</a>
              <span><Clock3 size={13} /> 9:00 AM–5:00 PM IST</span>
            </div>
          </div>
          <div className="header-main">
            <div className="header-inner page-width">
              <Link className="brand" href="/" aria-label="AYO Rental home">
                <Image className="brand-logo" src="/ayo-logo.svg" alt="AYO" width={108} height={34} priority />
              </Link>
              <nav className="main-nav" aria-label="Main navigation">
                <Link href="/#app-preview">The app</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
              <MobileNavigation />
              <div className="header-actions">
                <a className="header-phone" href="tel:9690601958"><Phone size={15} /><span>9690601958</span></a>
                <Link className="header-cta" href="/#coming-soon">App coming soon <ArrowRight size={15} /></Link>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-main page-width">
            <div className="footer-brand-block">
              <Link className="brand" href="/" aria-label="AYO Rentals home">
                <Image className="footer-logo" src="/ayo-logo.svg" alt="AYO" width={112} height={35} />
              </Link>
              <p>A new way to discover car and bike rentals is coming soon to India.</p>
              <span className="footer-location">AYO RENTAL · INDIA</span>
            </div>
            <div className="footer-links">
              <div><strong>AYO</strong><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/#app-preview">The app</Link><Link href="/#coming-soon">Launch updates</Link></div>
              <div><strong>INFORMATION</strong><Link href="/terms-and-conditions">Terms &amp; conditions</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/cancellation-refund-policy">Cancellation &amp; refunds</Link><Link href="/shipping-policy">App availability</Link></div>
            </div>
            <div className="footer-contact">
              <strong>GET IN TOUCH</strong>
              <a href="tel:9690601958"><Phone size={15} /><span>9690601958</span></a>
              <a href="mailto:ayorentalss@gmail.com"><Mail size={15} /><span>ayorentalss@gmail.com</span></a>
              <p><MapPin size={15} /><span>Vrindavan City, near Jaipuria,<br />Agra, Uttar Pradesh 282001, India</span></p>
              <p><Clock3 size={15} /><span>Working hours: 9:00 AM–5:00 PM IST</span></p>
            </div>
          </div>
          <div className="footer-bottom page-width"><span>© 2026 AYO Rental. All rights reserved.</span><span>For users in India.</span><Link href="/privacy-policy">Privacy</Link></div>
        </footer>
      </body>
    </html>
  );
}
