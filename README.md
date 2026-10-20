# AYO Rental website

India-focused app launch website for AYO Rental. It introduces the upcoming car and bike rental app and does not take bookings, rental requests, or payments. The homepage features an animated Three.js driving scene, with supporting motion on About, Contact, and policy pages.

Public pages: About, Contact, Privacy Policy, Terms & Conditions, Cancellation & Refunds, App Availability, and Pricing.

The site is responsive on mobile and can be installed as a PWA on supported browsers. Its service worker caches the app shell and visited pages, and shows an offline page when a requested page is not available offline. Installation requires HTTPS in production.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and run ESLint with `npm run lint`.

## Before launch

- Add official Google Play and Apple App Store links when the app is released. The current store labels are intentionally non-clickable.
- Confirm the registered legal business name and ensure the supplied postal address, phone number, email, and support hours are current.
- Review the privacy, terms, cancellation, and refund policies with an India-qualified legal professional and update them to match the app's actual data practices and rental operations.
- If app payments are introduced, add and test the payment provider flow in the app and publish the applicable charges, taxes, payment schedule, and refund terms before taking payment. This website does not process payments.

The policy copy is a starting point for business review, not legal advice. The supplied contact email, phone number, address, and support hours are shown throughout the site.