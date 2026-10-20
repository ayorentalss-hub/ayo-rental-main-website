import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Pricing Policy | AYO Rental India",
  description: "Learn how pricing will be displayed if rental transactions are introduced in the AYO app.",
};

export default function PricingPage() {
  return <PolicyPage
    title="Pricing information"
    summary="This website does not list rental prices or accept payments. Any future app prices will be shown in Indian Rupees before a transaction is confirmed."
    callout="There are no rentals for sale and no amount to pay on this website. The app is coming soon; no app-store download or rental checkout is live yet."
    sections={[
      { heading: "Website pricing", paragraphs: ["This website is an informational app launch page. It does not display vehicle listings, rental rates, taxes, service charges, or deposits, and it does not sell products or services. No payment can be made through this site."] },
      { heading: "Prices in the future app", paragraphs: ["If rental transactions are introduced in the AYO app, the applicable rental rate, rental period, taxes, fees, optional services, and any deposit will be shown in Indian Rupees (INR) before you confirm. The final payable amount and payment schedule will be made clear before payment. Any app-specific pricing terms will be provided at that time."] },
      { heading: "Questions", paragraphs: ["For questions about the upcoming app or this policy, email ayorentalss@gmail.com or call 9690601958 between 9:00 AM and 5:00 PM IST. No payment details are needed to contact us."] },
    ]}
  />;
}