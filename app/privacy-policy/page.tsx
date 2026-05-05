import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - UtilityHub",
  description: "Learn how UtilityHub handles your data and our commitment to user privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 sm:text-5xl tracking-tight">
          Privacy <span className="text-blue-600">Policy</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Last Updated: May 4, 2026 — Your privacy is our priority.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
          <p>
            UtilityHub ("we", "us", or "our") operates the utilityhub.example.com website. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share your personal information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
          <h3 className="text-lg font-semibold mb-2">User-Provided Data</h3>
          <p>
            UtilityHub is designed to process data entirely on your local device. We do not store or transmit the text, images, or code that you process using our tools.
          </p>
          <h3 className="text-lg font-semibold mb-2 mt-4">Automatically Collected Data</h3>
          <p>
            Like most websites, we collect certain information automatically through cookies and similar technologies, such as your IP address, browser type, and operating system, to analyze site traffic and improve user experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">3. Google AdSense & Cookies</h2>
          <p>
            We use Google AdSense to serve advertisements on our site. Google uses cookies to serve ads based on your prior visits to our website or other websites on the Internet.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">Ads Settings</a>.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">4. Third-Party Links</h2>
          <p>
            Our website may contain links to other websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">5. Children's Privacy</h2>
          <p>
            Our services are not intended for anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at support@utilityhub.example.com.
          </p>
        </section>
      </div>
    </div>
  );
}
