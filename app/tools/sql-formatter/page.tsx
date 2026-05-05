"use client";

import React, { useState, useEffect } from "react";
import { format } from "sql-formatter";
import AdUnit from "@/components/AdUnit";

type Dialect = "mysql" | "postgresql" | "tsql";

export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [dialect, setDialect] = useState<Dialect>("mysql");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    handleFormat(input);
  }, [input, dialect]);

  const handleFormat = (val: string) => {
    setError(null);
    if (!val) {
      setOutput("");
      return;
    }

    try {
      const formatted = format(val, {
        language: dialect,
        keywordCase: "upper",
      });
      setOutput(formatted);
    } catch (e) {
      setError("Unable to format SQL. Please check your syntax.");
      setOutput("");
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Professional <span className="text-blue-600">SQL Formatter</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Prettify, validate, and format your SQL queries instantly. Support for MySQL, PostgreSQL, and SQL Server with customizable dialects.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center gap-8 mb-8 p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm">
        <div className="flex flex-col space-y-3">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
            SQL Dialect
          </label>
          <select
            value={dialect}
            onChange={(e) => setDialect(e.target.value as Dialect)}
            className="w-48 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-bold rounded-2xl block p-3 transition-all outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 cursor-pointer"
          >
            <option value="mysql">MySQL</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="tsql">SQL Server (T-SQL)</option>
          </select>
        </div>
        <div className="flex-grow" />
        <button
          onClick={clearAll}
          className="flex items-center justify-center px-6 py-3 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all active:scale-95 border border-transparent hover:border-red-200 dark:hover:border-red-900/30"
        >
          Clear All
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8">
        {/* Input */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
            Raw SQL Query
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-64 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[1.5rem] shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none font-mono text-sm leading-relaxed"
            placeholder="SELECT * FROM users WHERE active = 1..."
          />
        </div>

        {/* Output */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Formatted Result
            </label>
            <button
              onClick={copyToClipboard}
              disabled={!output}
              className={`flex items-center space-x-2 text-sm font-bold px-5 py-2 rounded-xl transition-all active:scale-95 ${
                copied 
                ? "bg-green-100 text-green-600 dark:bg-green-900/30" 
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 disabled:opacity-50 disabled:shadow-none"
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Copy SQL</span>
                </>
              )}
            </button>
          </div>
          <div className="relative">
            <textarea
              readOnly
              value={output}
              className={`w-full h-80 p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-2xl transition-all outline-none resize-none font-mono text-sm ${error ? "border-red-500" : ""}`}
              placeholder="Formatted SQL will appear here..."
            />
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 rounded-2xl">
                <span className="text-red-500 font-medium">{error}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ad Unit - End of Tool */}
      <AdUnit slotId="tool-bottom-slot" format="horizontal" className="my-12" />

      {/* Info Section */}
      <div className="mt-16 prose dark:prose-invert max-w-none border-t border-gray-100 dark:border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-4">Professional SQL Formatting</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Writing SQL is easy, but maintaining complex queries can be a nightmare. Our SQL Formatter 
          helps you keep your code clean, readable, and standardized across your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h4 className="font-bold mb-2">MySQL</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Optimized for MySQL specific keywords and syntax rules.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h4 className="font-bold mb-2">PostgreSQL</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Handles Postgres-specific features like JSONB and window functions.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h4 className="font-bold mb-2">SQL Server</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Full T-SQL support for Microsoft SQL Server environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
