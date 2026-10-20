import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Bike,
  CarFront,
  Check,
  Clock3,
  Download,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import DriveScene from "@/components/DriveScene";
import HomeMotion from "@/components/HomeMotion";

export const metadata: Metadata = {
  title: "AYO Rental | App Coming Soon in India",
  description:
    "The AYO Rental app is coming soon. Discover a simpler way to explore car and bike rentals across India.",
};

const appFeatures = [
  {
    number: "01",
    icon: CarFront,
    title: "Find your kind of ride",
    text: "Explore cars and bikes for everyday plans, weekends away, and journeys across India.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Start close to you",
    text: "See rental options and pickup information for the places and dates available in the app.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Know before you go",
    text: "Review vehicle details, eligibility, charges, and rental terms before you continue.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <HomeMotion />
      <section className="launch-hero hero-scene" aria-labelledby="hero-title">
        <DriveScene variant="hero" />
        <div className="hero-photo-card">
          <Image
            alt="A rental car ready for a drive"
            className="hero-photo"
            fill
            priority
            sizes="(max-width: 760px) 70vw, 42vw"
            src="/hero-rental-car.jpg"
          />
          <div className="hero-photo-shade" />
          <div className="hero-photo-caption">
            <span>THE ROAD IS YOURS</span>
            <strong>Find your next way out.</strong>
          </div>
        </div>
        <div className="launch-hero-content page-width">
          <div className="launch-copy">
            <p className="launch-eyebrow"><span /> THE AYO APP · COMING SOON IN INDIA</p>
            <h1 id="hero-title">Your next ride,<br /><em>one app away.</em></h1>
            <p className="launch-description">
              A fresh way to discover car and bike rentals is on its way. AYO is getting ready for the roads, plans, and spontaneous getaways that make India yours.
            </p>
            <div className="launch-actions">
              <a className="button button-primary" href="mailto:ayorentalss@gmail.com?subject=Notify%20me%20when%20the%20AYO%20app%20launches">
                Keep me posted <ArrowRight size={17} />
              </a>
              <a className="text-link launch-secondary" href="#app-preview">Take a look <ArrowDown size={15} /></a>
            </div>
            <div className="launch-note"><MapPin size={15} /><span>Made in India. The app is not available to download yet.</span></div>
          </div>
          <div className="scene-caption"><span>01 / THE JOURNEY AWAITS</span><span>AYO RENTAL · INDIA</span></div>
        </div>
      </section>

      <section className="availability-band" data-motion id="coming-soon">
        <div className="availability-inner page-width">
          <div className="availability-icon"><Smartphone size={21} /></div>
          <div className="availability-copy"><span>COMING SOON</span><strong>The AYO app is still in the garage.</strong><p>App Store and Google Play download links will appear here when the app is ready.</p></div>
          <div className="store-badges" aria-label="App download availability">
            <div><span>Download on the</span><strong>App Store</strong><small>Coming soon</small></div>
            <div><span>Get it on</span><strong>Google Play</strong><small>Coming soon</small></div>
          </div>
        </div>
      </section>

      <section className="app-preview-section page-width" data-motion id="app-preview" aria-labelledby="preview-title">
        <div className="preview-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A FIRST LOOK</p>
          <h2 id="preview-title">Big plans deserve<br />a simpler start.</h2>
          <p>AYO is being built to bring the rental journey together in one place. Browse the app preview, then come back when the download is live.</p>
          <div className="preview-checks">
            <span><Check size={15} /> Cars and bikes</span>
            <span><Check size={15} /> Clear rental details</span>
            <span><Check size={15} /> Designed for India</span>
          </div>
          <a className="text-link" href="mailto:ayorentalss@gmail.com?subject=AYO%20app%20launch">Ask us about the launch <ArrowRight size={15} /></a>
        </div>
        <div className="preview-stage" aria-label="Illustrative preview of the upcoming AYO app">
          <div className="preview-orbit orbit-one" />
          <div className="preview-orbit orbit-two" />
          <div className="phone-mockup">
            <div className="phone-island" />
            <div className="phone-screen">
              <div className="phone-topline"><span>9:41</span><span className="phone-status">● ● ▰</span></div>
              <div className="phone-brand"><span className="phone-brand-mark">A</span><span>AYO <small>RENTAL</small></span><Sparkles size={16} /></div>
              <div className="phone-greeting"><small>YOUR NEXT PLAN</small><strong>Where to<br />this time?</strong></div>
              <div className="phone-location"><MapPin size={16} /><span><small>YOUR CITY</small><strong>Explore India</strong></span><ArrowRight size={15} /></div>
              <div className="phone-vehicle-photo" />
              <div className="phone-vehicle-label"><span><CarFront size={13} /> CARS</span><span><Bike size={13} /> BIKES</span></div>
              <div className="phone-coming"><span><Clock3 size={14} /> APP PREVIEW</span><strong>Coming soon</strong></div>
            </div>
          </div>
          <div className="preview-stamp"><Download size={15} /><span>YOUR NEXT<br />ADVENTURE</span></div>
          <p className="preview-caption">Illustrative app preview. Features may change before launch.</p>
        </div>
      </section>

      <section className="features-section" data-motion>
        <div className="page-width">
          <div className="features-heading"><div><p className="eyebrow"><span className="eyebrow-dot" /> THE ROAD AHEAD</p><h2>Made for wherever<br />you’re headed.</h2></div><p>One app for exploring rental options and getting the details you need before a trip.</p></div>
          <div className="feature-grid">
            {appFeatures.map(({ number, icon: Icon, title, text }) => (
              <article className="feature-item" key={number}>
                <div className="feature-top"><span>{number}</span><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="launch-cta page-width" data-motion>
        <div className="cta-mark"><Smartphone size={23} /></div>
        <div><p className="eyebrow">INDIA, WE’RE GETTING READY</p><h2>Get the first word<br />when AYO arrives.</h2><p>The app is coming soon. Email us to ask about launch updates.</p></div>
        <a className="button button-primary" href="mailto:ayorentalss@gmail.com?subject=AYO%20app%20launch%20updates">Email AYO <ArrowRight size={16} /></a>
        <span className="cta-decoration" aria-hidden="true">AYO</span>
      </section>

      <section className="faq-section page-width" data-motion aria-labelledby="faq-title">
        <div className="faq-heading"><p className="eyebrow"><span className="eyebrow-dot" /> A FEW QUICK ANSWERS</p><h2 id="faq-title">Before we hit the road.</h2></div>
        <div className="faq-list">
          <details><summary>Can I book a rental on this website?<span>+</span></summary><p>No. This website shares information about AYO and the upcoming app. It does not take bookings, payments, or rental requests.</p></details>
          <details><summary>When can I download the AYO app?<span>+</span></summary><p>The app is coming soon. We will add the official App Store and Google Play links here once they are available.</p></details>
          <details><summary>Where will AYO be available?<span>+</span></summary><p>AYO is intended for users in India. App availability and rental locations will be shown in the app when it launches.</p></details>
          <details><summary>How can I contact the AYO team?<span>+</span></summary><p>Email ayorentalss@gmail.com or call 9690601958 between 9:00 AM and 5:00 PM IST.</p></details>
        </div>
      </section>
    </main>
  );
}
