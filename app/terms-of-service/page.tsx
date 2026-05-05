import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - UtilityHub",
  description: "Read the terms and conditions for using UtilityHub's free online tools.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 sm:text-5xl tracking-tight">
          Terms of <span className="text-blue-600">Service</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Last Updated: May 4, 2026 — Please read these terms carefully.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using UtilityHub ("we", "us", or "our"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily use the tools on UtilityHub's website for personal or commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Attempt to decompile or reverse engineer any software contained on UtilityHub.</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
            <li>Use the tools for any illegal purpose or in violation of any local, state, or international laws.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">3. Disclaimer</h2>
          <p>
            The tools on UtilityHub's website are provided on an 'as is' basis. UtilityHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">4. Limitations</h2>
          <p>
            In no event shall UtilityHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the tools on UtilityHub's website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on UtilityHub's website could include technical, typographical, or photographic errors. UtilityHub does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@utilityhub.example.com.
          </p>
        </section>
      </div>
    </div>
  );
}
