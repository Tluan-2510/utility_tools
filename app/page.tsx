import React from "react";
import ToolCard from "@/components/ToolCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UtilityHub - 50+ Free Online Developer & SEO Tools",
  description: "Free, secure, and instant online tools for developers, SEO experts, and designers. Format JSON, generate meta tags, compress images, and more without any installation.",
  keywords: ["online tools", "developer tools", "SEO tools", "image compressor", "json formatter", "password generator"],
  openGraph: {
    title: "UtilityHub - All-in-One Online Toolkit",
    description: "The ultimate collection of tools for web professionals.",
    type: "website",
    url: "https://utilityhub.example.com",
  },
};

const tools = [
  {
    name: "SQL Formatter",
    description: "Prettify, validate, and minify your SQL data instantly for MySQL, Postgres, and T-SQL.",
    href: "/tools/sql-formatter",
    category: "Dev",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Base64 Converter",
    description: "Quickly encode and decode text to Base64 format securely in your browser.",
    href: "/tools/base64-converter",
    category: "Dev",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    name: "Case Converter",
    description: "Convert text to UPPERCASE, lowercase, Title Case, and more instantly.",
    href: "/tools/case-converter",
    category: "Dev",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 5v12m0 0H7m2 0h2M3 17h12" />
      </svg>
    ),
  },
  {
    name: "Word Counter",
    description: "Real-time word, character, and sentence counting for your content.",
    href: "/tools/word-counter",
    category: "Text",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Lorem Ipsum",
    description: "Generate professional placeholder text for your design projects.",
    href: "/tools/lorem-ipsum-generator",
    category: "Text",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
  },
  {
    name: "Image to WebP",
    description: "Convert PNG and JPG to WebP format instantly to boost site speed.",
    href: "/tools/image-to-webp",
    category: "Media",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Password Generator",
    description: "Generate strong, secure, and random passwords instantly.",
    href: "/tools/password-generator",
    category: "Security",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            The Ultimate <span className="text-blue-600 dark:text-blue-400">Toolkit</span> for Web Pros
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Boost your productivity with 50+ free, fast, and secure online tools. 
            No sign-up required. Everything happens in your browser.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#tools" className="btn-primary">
              Explore Tools
            </a>
            <a href="/blog" className="btn-secondary">
              Read Blog
            </a>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Tools</h2>
              <p className="text-gray-600 dark:text-gray-400">Hand-picked utilities to speed up your workflow.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">100% Secure</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Your data never leaves your browser. We don't store any of your inputs.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Built for speed using modern web technologies for instant results.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Free Forever</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">No subscriptions, no hidden fees. Just free tools for everyone.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
