import type { Metadata } from "next";
import DriveScene from "@/components/DriveScene";

export const metadata: Metadata = {
  title: "About AYO Rental | App Coming Soon",
  description: "Learn about AYO Rental, an upcoming car and bike rental app for users in India.",
};

const values = [
  { number: "01", title: "Car and bike rentals", text: "Explore the idea of finding different kinds of rental rides in one mobile app." },
  { number: "02", title: "Details before decisions", text: "The upcoming app is being designed to make vehicle information and applicable rental terms easy to review." },
  { number: "03", title: "Made for India", text: "AYO Rental is preparing an India-focused experience. Locations and availability will be shared when the app launches." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="policy-hero">
        <DriveScene variant="banner" />
        <div className="policy-hero-content page-width">
          <p className="eyebrow"><span className="eyebrow-dot" /> ABOUT AYO RENTAL</p>
          <h1>A new way<br />to get moving.</h1>
          <p>We’re getting ready to bring car and bike rentals to one easy-to-use app for people in India.</p>
        </div>
      </section>
      <section className="about-main page-width">
        <div className="about-intro">
          <h2>The app is on its way.</h2>
          <p>AYO Rental is building a mobile app to help people discover car and bike rental options. This website is an introduction to AYO and a place to find our contact details. It does not accept bookings, rental requests, or payments. When the app is ready, its official download links and service information will be shared here.</p>
        </div>
        <div className="about-values">
          {values.map((value) => <article className="value-item" key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}
        </div>
      </section>
    </main>
  );
}