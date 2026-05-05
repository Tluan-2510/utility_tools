import React from "react";
import AdUnit from "@/components/AdUnit";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-grow min-w-0">
          <div className="bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            {children}
          </div>
        </div>

        {/* Sidebar Area */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
          {/* Sidebar Ad Unit */}
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
              Advertisement
            </div>
            <AdUnit slotId="sidebar-slot" format="vertical" className="my-0" />
          </div>

          {/* Related Tools or Categories could go here */}
          <div className="bg-white dark:bg-gray-900/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Navigation
            </h3>
            <div className="space-y-3">
              <Link href="/tools/json-formatter" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">JSON Formatter</Link>
              <Link href="/tools/case-converter" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Case Converter</Link>
              <Link href="/tools/base64-converter" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Base64 Converter</Link>
              <Link href="/tools/sql-formatter" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">SQL Formatter</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
