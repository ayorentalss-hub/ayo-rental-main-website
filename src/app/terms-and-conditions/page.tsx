import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | AYO Rental India",
  description: "Read the website terms for AYO Rental, an upcoming car and bike rental app for India.",
};

export default function TermsPage() {
  return <PolicyPage
    title="Terms & conditions"
    summary="These terms govern use of the AYO Rental informational website and, when available, access to the AYO mobile app in India."
    callout="This website is informational only. The AYO app is coming soon; you cannot book, request, or pay for a rental through this website."
    sections={[
      { heading: "About these terms", paragraphs: ["AYO Rental provides this website to share information about the upcoming AYO mobile app for car and bike rentals in India. By accessing this website, you agree to use it lawfully and in accordance with these terms. If you do not agree, please stop using the website.", "The app is not yet available. These website terms do not create a rental, reservation, payment, or other transaction."] },
      { heading: "Website use", bullets: ["Use the website only for lawful, personal, and informational purposes.", "Do not attempt to disrupt, damage, reverse engineer, or gain unauthorised access to the website or its systems.", "Do not upload or send unlawful, misleading, harmful, or infringing material to AYO.", "Do not treat website text, imagery, or illustrative app previews as a confirmed offer, vehicle listing, price, or statement of current availability."] },
      { heading: "App availability and future rental terms", paragraphs: ["We intend to publish official app download links here when the app is ready. App availability may depend on your device, operating system, app store, and location in India. We may change, suspend, or delay the planned release.", "If rental or payment functionality is introduced in the app, the applicable eligibility, vehicle, price, tax, fee, pickup, deposit, payment, cancellation, and refund terms will be presented before you confirm a transaction. Those app-specific terms will apply to that transaction along with applicable law. No vehicle is reserved by visiting this website or emailing AYO."] },
      { heading: "Intellectual property", paragraphs: ["The AYO name, logo, website design, text, and other materials are owned by or used with permission by AYO Rental or their respective rights holders. You may view the website for personal information purposes. You may not reproduce or commercially use website materials without prior permission, except where applicable law allows."] },
      { heading: "Third-party services and links", paragraphs: ["This website may link to external websites or app stores for convenience. AYO does not control third-party services and is not responsible for their content, availability, or privacy practices. Their own terms apply when you use them."] },
      { heading: "Disclaimers and liability", paragraphs: ["We aim to keep website information current, but the site and its content are provided for general information and may change. To the extent permitted by Indian law, AYO is not liable for indirect or consequential loss arising from use of this informational website. Nothing in these terms excludes a consumer right, remedy, or liability that cannot lawfully be excluded or limited."] },
      { heading: "Indian law, grievances, and updates", paragraphs: ["These terms are governed by the laws of India. Disputes are subject to the jurisdiction of competent courts in India, without limiting any consumer rights or forum available under applicable law.", "For questions or grievances, email ayorentalss@gmail.com or write to the address shown on our Contact page. We will handle grievances within the time required by applicable Indian law. We may revise these terms by publishing an updated version on this page."] },
    ]}
  />;
}