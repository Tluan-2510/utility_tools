import React from "react";
import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  category: string;
}

export default function ToolCard({
  name,
  description,
  href,
  icon,
  category,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col p-8 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:border-blue-500/20 hover:-translate-y-2 transition-all duration-500"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-100 dark:border-gray-700">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
        {description}
      </p>
      <div className="mt-auto flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
        <span className="border-b-2 border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 pb-0.5">
          Try it now
        </span>
        <svg
          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </Link>
  );
}
