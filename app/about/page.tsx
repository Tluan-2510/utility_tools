import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - UtilityHub",
  description: "Learn more about UtilityHub, our mission to provide free, secure, and fast online tools for everyone.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 sm:text-5xl">
          Empowering Web Pros with <span className="text-blue-600">Free Tools</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          UtilityHub is dedicated to providing high-performance, secure, and accessible utilities for developers, designers, and SEO experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We believe that powerful tools should be available to everyone without barriers. Our mission is to build a comprehensive toolkit that simplifies your daily workflow, whether you're formatting JSON, optimizing images, or generating secure passwords.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy First</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Your security is our top priority. Unlike many other online services, UtilityHub processes your data entirely in your browser. We never store, transmit, or even see the information you process with our tools.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 mb-20 border border-gray-100 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">1</div>
            <h3 className="font-bold mb-2">Developer Utils</h3>
            <p className="text-sm text-gray-500">JSON formatting, Base64 encoding, and code snippets.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">2</div>
            <h3 className="font-bold mb-2">Image Optimization</h3>
            <p className="text-sm text-gray-500">Fast conversion and compression without quality loss.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">3</div>
            <h3 className="font-bold mb-2">SEO & Security</h3>
            <p className="text-sm text-gray-500">Meta tag generators and strong password creators.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Have feedback or a tool suggestion? We'd love to hear from you.
        </p>
        <a 
          href="mailto:support@utilityhub.example.com"
          className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
}
