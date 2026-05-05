"use client";

import React, { useState, useEffect, useCallback } from "react";
import AdUnit from "@/components/AdUnit";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState({ score: 0, label: "Weak", color: "bg-red-500" });

  const generatePassword = useCallback(() => {
    const charset: { [key: string]: string } = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    };

    let charPool = "";
    Object.keys(options).forEach((key) => {
      if (options[key as keyof typeof options]) {
        charPool += charset[key];
      }
    });

    if (!charPool) {
      setPassword("Please select at least one option");
      return;
    }

    let generatedPassword = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      generatedPassword += charPool[array[i] % charPool.length];
    }

    setPassword(generatedPassword);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  useEffect(() => {
    // Calculate password strength
    let score = 0;
    if (password.length > 8) score++;
    if (password.length > 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      setStrength({ score: 20, label: "Weak", color: "bg-red-500" });
    } else if (score <= 4) {
      setStrength({ score: 60, label: "Good", color: "bg-yellow-500" });
    } else {
      setStrength({ score: 100, label: "Strong", color: "bg-green-500" });
    }
  }, [password]);

  const copyToClipboard = () => {
    if (!password || password.startsWith("Please")) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOptionChange = (key: keyof typeof options) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Strong Password Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Generate secure, random passwords instantly to protect your online accounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Tool Area */}
        <div className="md:col-span-8 space-y-6">
          {/* Output Display */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative flex flex-col sm:flex-row items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 gap-6 shadow-xl">
              <input
                type="text"
                readOnly
                value={password}
                className="flex-1 bg-transparent text-2xl font-mono font-bold text-gray-900 dark:text-white outline-none w-full tracking-wider"
              />
              <div className="flex items-center space-x-3 shrink-0">
                <button
                  onClick={generatePassword}
                  className="p-3 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-2xl transition-all active:scale-90"
                  title="Regenerate"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center space-x-3 px-8 py-3.5 rounded-2xl font-bold transition-all active:scale-95 ${
                    copied
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>Copy Result</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Strength Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-gray-600 dark:text-gray-400">Strength: <span className="text-gray-900 dark:text-white">{strength.label}</span></span>
              <span className="text-gray-600 dark:text-gray-400">{password.length} chars</span>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${strength.color}`}
                style={{ width: `${strength.score}%` }}
              ></div>
            </div>
          </div>

          {/* Configuration */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-8">
            {/* Length Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Password Length</label>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-blue-600 dark:text-blue-400 font-bold">{length}</span>
              </div>
              <input
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>4</span>
                <span>16</span>
                <span>32</span>
                <span>48</span>
                <span>64</span>
              </div>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "uppercase", label: "Uppercase (A-Z)" },
                { id: "lowercase", label: "Lowercase (a-z)" },
                { id: "numbers", label: "Numbers (0-9)" },
                { id: "symbols", label: "Symbols (!@#$%)" },
              ].map((opt) => (
                <label key={opt.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-all">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{opt.label}</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options[opt.id as keyof typeof options]}
                      onChange={() => handleOptionChange(opt.id as keyof typeof options)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-2xl p-6">
            <h3 className="text-blue-900 dark:text-blue-300 font-bold mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Security Note
            </h3>
            <p className="text-blue-800/80 dark:text-blue-300/80 text-sm leading-relaxed">
              Passwords are generated locally in your browser. We never transmit or store your generated passwords.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6">
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Strength Tips</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Use at least 12 characters
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Mix letters, numbers, and symbols
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Avoid common words or names
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Use a unique password for each site
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ad Unit - End of Tool */}
      <AdUnit slotId="tool-bottom-slot" format="horizontal" className="my-12" />

      {/* SEO Content Section */}
      <div className="mt-16 prose dark:prose-invert max-w-none border-t border-gray-100 dark:border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-6">Why You Need a Strong Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Protect Against Brute-Force</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Hackers use sophisticated software that can test millions of combinations per second. A short, simple password can be cracked in minutes. Our generator creates high-entropy strings that would take centuries to crack.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Data Privacy</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your email, banking, and social media accounts contain sensitive personal information. A strong, unique password is your first and most important line of defense against identity theft.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 text-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-white">How to manage multiple passwords?</h3>
          <p className="text-gray-300 mb-6">
            It's impossible to remember dozens of complex passwords. We highly recommend using a reputable password manager like Bitwarden, 1Password, or LastPass to securely store and sync your passwords across all your devices.
          </p>
          <div className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Learn more about password managers
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
