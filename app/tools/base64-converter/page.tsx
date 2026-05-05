"use client";

import React, { useState, useEffect } from "react";
import { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export default function Base64Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    handleConvert(input);
  }, [input, mode]);

  const handleConvert = (val: string) => {
    setError(null);
    if (!val) {
      setOutput("");
      return;
    }

    try {
      if (mode === "encode") {
        // UTF-8 safe base64 encoding
        const encoded = btoa(encodeURIComponent(val).replace(/%([0-9A-F]{2})/g, (match, p1) => {
          return String.fromCharCode(parseInt(p1, 16));
        }));
        setOutput(encoded);
      } else {
        // UTF-8 safe base64 decoding
        const decoded = decodeURIComponent(Array.prototype.map.call(atob(val), (c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        setOutput(decoded);
      }
    } catch (e) {
      setError("Invalid input for " + (mode === "encode" ? "encoding" : "decoding"));
      setOutput("");
    }
  };

  const toggleMode = () => {
    setMode(mode === "encode" ? "decode" : "encode");
    setInput(output);
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
          Secure <span className="text-blue-600">Base64 {mode === "encode" ? "Encoder" : "Decoder"}</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {mode === "encode" 
            ? "Encode your text into Base64 format securely. Safe for UTF-8 characters and binary-to-text transfers." 
            : "Decode Base64 strings back into human-readable text. Instant, secure, and browser-side processing."}
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <button 
          onClick={clearAll}
          className="text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 px-4 py-2 rounded-xl transition-all active:scale-95"
        >
          Clear All
        </button>
      </div>

      {/* Main Tool */}
      <div className="grid grid-cols-1 gap-8">
        {/* Input area */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Input {mode === "encode" ? "Text" : "Base64"}
            </label>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[1.5rem] shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none font-mono text-sm leading-relaxed"
            placeholder={mode === "encode" ? "Enter text here..." : "Enter Base64 here..."}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center py-4">
          <button
            onClick={toggleMode}
            className="group flex items-center space-x-4 px-10 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-[2rem] hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 transition-all font-bold shadow-xl shadow-gray-200/50 dark:shadow-none"
          >
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
            <span className="text-lg">Switch to {mode === "encode" ? "Decoder" : "Encoder"}</span>
          </button>
        </div>

        {/* Output area */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Output {mode === "encode" ? "Base64" : "Text"}
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
                  <span>Copy Result</span>
                </>
              )}
            </button>
          </div>
          <div className="relative">
            <textarea
              readOnly
              value={output}
              className={`w-full h-48 p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-[1.5rem] transition-all outline-none resize-none font-mono text-sm leading-relaxed ${error ? "border-red-500" : ""}`}
              placeholder="Output will appear here..."
            />
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 rounded-[1.5rem]">
                <span className="text-red-500 font-bold">{error}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ad Unit - End of Tool */}
      <AdUnit slotId="tool-bottom-slot" format="horizontal" className="my-12" />

      {/* SEO Content Section */}
      <div className="mt-16 prose dark:prose-invert max-w-none border-t border-gray-100 dark:border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-4">What is Base64?</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. 
          It is commonly used when there is a need to encode binary data that needs to be stored and transferred 
          over media that are designed to deal with textual data.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-4">Why use our Base64 Converter?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
          <li><strong>Secure:</strong> All conversions happen in your browser. No data is sent to our servers.</li>
          <li><strong>UTF-8 Support:</strong> We handle special characters correctly, unlike many other online tools.</li>
          <li><strong>Fast & Minimal:</strong> No ads, no bloat. Just the tool you need.</li>
        </ul>
      </div>
    </div>
  );
}
