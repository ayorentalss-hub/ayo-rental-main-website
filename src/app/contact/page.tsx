import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import DriveScene from "@/components/DriveScene";

export const metadata: Metadata = {
  title: "Contact AYO Rental | India",
  description: "Contact AYO Rental by phone, email, or post. Support hours are 9:00 AM to 5:00 PM IST.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="policy-hero">
        <DriveScene variant="banner" />
        <div className="policy-hero-content page-width">
          <p className="eyebrow"><span className="eyebrow-dot" /> AYO RENTAL · INDIA</p>
          <h1>We’re here<br />to help.</h1>
          <p>Have a question about AYO or the upcoming app? Reach our team using the details below.</p>
        </div>
      </section>
      <section className="contact-layout page-width">
        <div className="contact-card">
          <div><span className="contact-icon"><Phone size={18} /></span><p><small>CALL US</small><a href="tel:9690601958">9690601958</a></p></div>
          <div><span className="contact-icon"><Mail size={18} /></span><p><small>EMAIL US</small><a href="mailto:ayorentalss@gmail.com">ayorentalss@gmail.com</a></p></div>
          <div><span className="contact-icon"><Clock3 size={18} /></span><p><small>WORKING HOURS</small><strong>9:00 AM–5:00 PM IST</strong></p></div>
          <div><span className="contact-icon"><MapPin size={18} /></span><p><small>ADDRESS</small><strong>Vrindavan City, near Jaipuria,<br />Agra, Uttar Pradesh 282001, India</strong></p></div>
          <p className="contact-note">This website is for information about AYO Rental and its upcoming app. Bookings and payments are not available here.</p>
        </div>
      </section>
    </main>
  );
}