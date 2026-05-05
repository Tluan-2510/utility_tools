"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AdUnit from "./AdUnit";

const navGroups = [
  {
    name: "Dev",
    items: [
      { name: "SQL Formatter", href: "/tools/sql-formatter" },
      { name: "Base64 Converter", href: "/tools/base64-converter" },
      { name: "Case Converter", href: "/tools/case-converter" },
    ],
  },
  {
    name: "Text",
    items: [
      { name: "Word Counter", href: "/tools/word-counter" },
      { name: "Lorem Ipsum", href: "/tools/lorem-ipsum-generator" },
    ],
  },
  {
    name: "Media",
    items: [
      { name: "Image to WebP", href: "/tools/image-to-webp" },
    ],
  },
  {
    name: "Security",
    items: [
      { name: "Password Generator", href: "/tools/password-generator" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (group: string) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setActiveGroup(group);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveGroup(null);
    }, 150); // 150ms delay to bridge any small mouse gaps
    setLeaveTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (leaveTimeout) clearTimeout(leaveTimeout);
    };
  }, [leaveTimeout]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >
              UtilityHub
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navGroups.map((group) => (
              <div
                key={group.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(group.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center space-x-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
                  activeGroup === group.name 
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" 
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}>
                  <span>{group.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeGroup === group.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown with bridge to prevent accidental closing */}
                <div
                  className={`absolute left-0 top-full pt-2 w-56 transition-all duration-300 origin-top-left ${
                    activeGroup === group.name
                      ? "opacity-100 scale-100 translate-y-0 visible"
                      : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                  }`}
                >
                  <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 p-1.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="6 18L18 6M6 6l18 18"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Ad Unit - Header */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800">
        <AdUnit slotId="header-desktop-slot" format="horizontal" className="my-2" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[80vh] py-4" : "max-h-0"
        }`}
      >
        <div className="px-4 space-y-4">
          {navGroups.map((group) => (
            <div key={group.name}>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
                {group.name}
              </div>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
