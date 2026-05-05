"use client";

import React, { useState, useEffect } from "react";
import AdUnit from "@/components/AdUnit";

const LOREM_SENTENCES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus.",
  "Nulla gravida orci a odio.",
  "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  "Integer in mauris eu nibh euismod gravida.",
  "Duis ac tellus et risus vulputate vehicula.",
  "Donec lobortis risus a elit.",
  "Etiam tempor.",
  "Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
  "Maecenas fermentum consequat mi.",
  "Donec fermentum.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Aenean dignissim pellentesque felis.",
  "Donec eu libero sit amet quam egestas semper.",
  "Aenean ultricies mi vitae est.",
  "Mauris placerat eleifend leo.",
];

export default function LoremIpsumGenerator() {
  const [count, setCount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "sentences">("paragraphs");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generate();
  }, []);

  const generate = () => {
    let result = "";
    if (type === "sentences") {
      for (let i = 0; i < count; i++) {
        result += LOREM_SENTENCES[i % LOREM_SENTENCES.length] + " ";
      }
    } else {
      for (let i = 0; i < count; i++) {
        let p = "";
        const sentenceCount = 4 + Math.floor(Math.random() * 4);
        for (let j = 0; j < sentenceCount; j++) {
          p += LOREM_SENTENCES[Math.floor(Math.random() * LOREM_SENTENCES.length)] + " ";
        }
        result += p + "\n\n";
      }
    }
    setOutput(result.trim());
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Lorem Ipsum Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Quickly generate custom placeholder text for your design mockups and development needs.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-8 mb-8 p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm">
        <div className="flex flex-col space-y-3">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-28 px-5 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-center"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
            Generation Type
          </label>
          <div className="flex bg-gray-50 dark:bg-gray-800 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setType("paragraphs")}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                type === "paragraphs"
                  ? "bg-white dark:bg-gray-700 shadow-md text-blue-600 dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Paragraphs
            </button>
            <button
              onClick={() => setType("sentences")}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                type === "sentences"
                  ? "bg-white dark:bg-gray-700 shadow-md text-blue-600 dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Sentences
            </button>
          </div>
        </div>

        <div className="flex-grow" />

        <button
          onClick={generate}
          className="btn-primary px-10"
        >
          Generate Text
        </button>
      </div>

      {/* Output */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Generated Result
          </label>
          <button
            onClick={copyToClipboard}
            className={`flex items-center space-x-2 text-sm font-bold px-6 py-2.5 rounded-xl transition-all active:scale-95 ${
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
                <span>Copy Results</span>
              </>
            )}
          </button>
        </div>
        <div className="p-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] min-h-[300px] shadow-inner font-serif text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
          {output}
        </div>
      </div>

      {/* Ad Unit - End of Tool */}
      <AdUnit slotId="tool-bottom-slot" format="horizontal" className="my-12" />

      {/* About Section */}
      <div className="mt-16 prose dark:prose-invert max-w-none border-t border-gray-100 dark:border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-4">What is Lorem Ipsum?</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          It has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}
