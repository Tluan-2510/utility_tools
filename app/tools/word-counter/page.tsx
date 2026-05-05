"use client";

import React, { useState, useMemo } from "react";
import AdUnit from "@/components/AdUnit";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const lines = text ? text.split(/\r\n|\r|\n/).length : 0;
    const readingTime = Math.ceil(words / 200);

    return {
      words,
      characters,
      charactersNoSpaces,
      lines,
      readingTime,
    };
  }, [text]);

  const clearText = () => setText("");

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Advanced <span className="text-blue-600">Word Counter</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Count words, characters, and lines in real-time. Perfectly optimized for professional writers, students, and SEO experts.
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm text-center hover:shadow-xl transition-all duration-500">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 font-outfit">
            {stats.words.toLocaleString()}
          </div>
          <div className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
            Words
          </div>
        </div>
        <div className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm text-center hover:shadow-xl transition-all duration-500">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 font-outfit">
            {stats.characters.toLocaleString()}
          </div>
          <div className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
            Characters
          </div>
        </div>
        <div className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm text-center hover:shadow-xl transition-all duration-500">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 font-outfit">
            {stats.lines.toLocaleString()}
          </div>
          <div className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
            Lines
          </div>
        </div>
        <div className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm text-center hover:shadow-xl transition-all duration-500">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 font-outfit">
            ~{stats.readingTime} min
          </div>
          <div className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
            Reading Time
          </div>
        </div>
      </div>

      {/* Main Input */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Paste your text below
          </label>
          <button
            onClick={clearText}
            className="text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 px-4 py-2 rounded-xl transition-all active:scale-95"
          >
            Clear Text
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-96 p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2rem] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none resize-none text-lg leading-relaxed shadow-inner"
          placeholder="Start typing or paste your content here..."
        />
      </div>

      {/* Additional Details */}
      <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Characters (no spaces):</span>
          <span>{stats.charactersNoSpaces}</span>
        </div>
      </div>

      {/* Ad Unit - End of Tool */}
      <AdUnit slotId="tool-bottom-slot" format="horizontal" className="my-12" />

      {/* Info Section */}
      <div className="mt-16 prose dark:prose-invert max-w-none border-t border-gray-100 dark:border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-4">Why use this Word Counter?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-2">Real-time Statistics</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">See your counts update as you type. No need to click any buttons or refresh the page.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Reading Time Estimation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Automatically calculates how long it would take an average person to read your text (based on 200 words per minute).</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Secure & Private</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Your content is processed entirely in your browser. We never store or transmit your text to any server.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Writing Optimization</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Keep track of your writing goals, character limits for social media, or essay length requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
