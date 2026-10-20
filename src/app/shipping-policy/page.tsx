import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "App Availability Policy | AYO Rental India",
  description: "Learn where the upcoming AYO app will be available and how its download links will be shared.",
};

export default function ShippingPolicyPage() {
  return <PolicyPage
    title="App availability"
    summary="AYO Rental is preparing a mobile app for users in India. App download links will be published here when the app is ready."
    callout="The AYO app is not available to download yet. This website does not deliver physical goods, accept bookings, or provide rental handovers."
    sections={[
      { heading: "Where the app is intended to be available", paragraphs: ["AYO Rental is intended for users in India. This does not mean that rentals will be available in every city or region. Once the app launches, service areas and vehicle availability will be identified in the app and may vary by location."] },
      { heading: "Downloading the app", paragraphs: ["Official download links for supported app stores will be posted on this website when the app is released. Until then, the app-store labels on this page are announcements only and are not download links. Do not download files claiming to be the AYO app from unofficial sources."] },
      { heading: "Digital service; no shipping", paragraphs: ["The AYO app is a digital service. No physical product is shipped or delivered when you visit this website or request launch information. Any vehicle pickup or handover service, if offered through the future app, will be described separately before a rental is confirmed."] },
      { heading: "Release changes and support", paragraphs: ["Release dates, supported devices, and service areas may change. For current information, contact ayorentalss@gmail.com or 9690601958 during 9:00 AM–5:00 PM IST, or write to Vrindavan City, near Jaipuria, Agra, Uttar Pradesh 282001, India."] },
    ]}
  />;
}