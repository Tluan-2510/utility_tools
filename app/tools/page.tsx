import React from "react";
import ToolCard from "@/components/ToolCard";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Online Tools - UtilityHub",
  description: "Browse our complete collection of free, secure, and fast online tools for developers and web professionals.",
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

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 sm:text-5xl tracking-tight">
          Explore Our <span className="text-blue-600">Toolkit</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Browse our complete collection of free online utilities designed to speed up your development and design workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>

      <div className="mt-20">
        <AdUnit slotId="tool-bottom-slot" format="horizontal" />
      </div>
    </div>
  );
}
