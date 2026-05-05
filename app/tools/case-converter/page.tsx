"use client";

import React, { useState, useEffect } from "react";
import AdUnit from "@/components/AdUnit";

export default function CaseConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = {
    characters: input.length,
    words: input.trim() ? input.trim().split(/\s+/).length : 0,
    sentences: input.trim() ? input.split(/[.!?]+/).filter(Boolean).length : 0,
  };

  const handleUpperCase = () => {
    setOutput(input.toUpperCase());
  };

  const handleLowerCase = () => {
    setOutput(input.toLowerCase());
  };

  const handleCapitalizedCase = () => {
    const capitalized = input
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setOutput(capitalized);
  };

  const handleSentenceCase = () => {
    const sentence = input
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
    setOutput(sentence);
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
  };

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Professional <span className="text-blue-600">Case Converter</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Transform your text into any case format instantly. Fast, secure, and entirely processed within your browser for maximum privacy.
        </p>
      </div>

      {/* Main Tool */}
      <div className="grid grid-cols-1 gap-8">
        {/* Input area */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Input Text
            </label>
            <div className="flex space-x-4 text-xs font-bold text-gray-500 dark:text-gray-400">
              <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">{stats.characters} Chars</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">{stats.words} Words</span>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-64 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[1.5rem] shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-sm leading-relaxed"
            placeholder="Type or paste your text here..."
          />
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8">
          <button
            onClick={handleUpperCase}
            className="btn-secondary"
          >
            UPPERCASE
          </button>
          <button
            onClick={handleLowerCase}
            className="btn-secondary"
          >
            lowercase
          </button>
          <button
            onClick={handleCapitalizedCase}
            className="btn-secondary"
          >
            Title Case
          </button>
          <button
            onClick={handleSentenceCase}
            className="btn-secondary"
          >
            Sentence case
          </button>
          <button
            onClick={clearAll}
            className="flex items-center justify-center px-6 py-2.5 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all active:scale-95 border border-transparent hover:border-red-200 dark:hover:border-red-900/30"
          >
            Clear All
          </button>
        </div>

        {/* Output area */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Result
            </label>
            <button
              onClick={copyToClipboard}
              disabled={!output}
              className={`flex items-center space-x-2 text-sm font-bold px-6 py-2 rounded-xl transition-all active:scale-95 ${
                copied
                  ? "bg-green-100 text-green-600 dark:bg-green-900/30"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 disabled:opacity-50"
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
                  <span>Copy Result</span>
                </>
              )}
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            className="w-full h-64 p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-[1.5rem] transition-all outline-none resize-none text-sm leading-relaxed"
            placeholder="Converted text will appear here..."
          />
        </div>
      </div>

      {/* Ad Unit - End of Tool */}
      <AdUnit slotId="tool-bottom-slot" format="horizontal" className="my-12" />

      {/* SEO Content Section */}
      <div className="mt-16 prose dark:prose-invert max-w-none border-t border-gray-100 dark:border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-4">Case Conversion Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">UPPERCASE</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Converts all characters in your text to their capital form. Useful for headings or making text stand out.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">lowercase</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Converts every character to its small form. Ideal for sanitizing inputs or formatting email addresses.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Capitalized Case</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Capitalizes the first letter of every word while making the rest lowercase. Great for titles and names.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Sentence Case</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Capitalizes only the first letter of each sentence. Perfect for correcting accidentally toggled Caps Lock text.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-4">Why use our tool?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
          <li><strong>Real-time Stats:</strong> Get character and word counts as you type.</li>
          <li><strong>Privacy First:</strong> Your text is processed entirely in your browser. We never see your data.</li>
          <li><strong>Clean Interface:</strong> No distracting ads or popups. Just a focused tool for your productivity.</li>
        </ul>
      </div>
    </div>
  );
}
