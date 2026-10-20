import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | AYO Rental India",
  description: "Review AYO Rental's cancellation and refund approach for its upcoming app in India.",
};

export default function CancellationRefundPage() {
  return <PolicyPage
    title="Cancellation & refunds"
    summary="This website does not take rental bookings or payments. App-specific cancellation terms will be shown before any future rental is confirmed."
    callout="No cancellation or refund can be requested for a transaction made through this website because this website does not process transactions."
    sections={[
      { heading: "Website transactions", paragraphs: ["The AYO website provides information about the upcoming mobile app. It does not take bookings, rental requests, deposits, or payments. Sending an email or calling AYO does not reserve a vehicle or create a rental contract."] },
      { heading: "Future app bookings", paragraphs: ["If rental booking becomes available in the AYO app, the cancellation window, applicable charges, refund eligibility, and any vehicle-specific conditions will be displayed before you confirm. Review those terms carefully and keep the app confirmation for your records."] },
      { heading: "Refund processing", paragraphs: ["For an eligible future app transaction, approved refunds will be processed to the original payment method where practicable. The time it takes for a refund to appear may depend on the payment provider and the user's bank. Any applicable statutory rights under Indian law remain unaffected."] },
      { heading: "How to get help", paragraphs: ["For a question or grievance, contact AYO Rental at ayorentalss@gmail.com or 9690601958 during working hours of 9:00 AM–5:00 PM IST. If you contact us about a future app transaction, include its reference number. Do not send full card details or identity documents by ordinary email."] },
    ]}
  />;
}