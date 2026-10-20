import Link from "next/link";
import DriveScene from "@/components/DriveScene";

type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PolicyPageProps = {
  title: string;
  summary: string;
  sections: PolicySection[];
  callout?: string;
};

const policyLinks = [
  ["Terms & conditions", "/terms-and-conditions"],
  ["Privacy policy", "/privacy-policy"],
  ["Cancellation & refunds", "/cancellation-refund-policy"],
  ["App availability", "/shipping-policy"],
  ["Pricing", "/pricing"],
] as const;

export default function PolicyPage({ title, summary, sections, callout }: PolicyPageProps) {
  return (
    <main>
      <section className="policy-hero">
        <DriveScene variant="banner" />
        <div className="policy-hero-content page-width">
          <p className="eyebrow"><span className="eyebrow-dot" /> AYO RENTALS · INFORMATION</p>
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>
      </section>
      <div className="policy-layout page-width">
        <aside className="policy-aside" aria-label="Policies">
          <strong>INFORMATION</strong>
          {policyLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </aside>
        <article className="policy-content">
          <p className="policy-updated">Last updated: October 20, 2026</p>
          {callout ? <div className="policy-callout"><strong>Please note: </strong>{callout}</div> : null}
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>
          ))}
          <section className="policy-contact">
            <h2>Contact and grievances</h2>
            <p>AYO Rental is based in India. For questions, privacy requests, or grievances, contact us through any of these channels:</p>
            <p><a href="tel:9690601958">Phone: 9690601958</a><br /><a href="mailto:ayorentalss@gmail.com">Email: ayorentalss@gmail.com</a></p>
            <p>Working hours: 9:00 AM–5:00 PM IST<br />Vrindavan City, near Jaipuria, Agra, Uttar Pradesh 282001, India</p>
            <p>See our <Link href="/contact">Contact page</Link> for details.</p>
          </section>
        </article>
      </div>
    </main>
  );
}