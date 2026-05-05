import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Converter - Change Text Case Online Fast & Secure",
  description: "Free online case converter tool. Easily convert text to UPPERCASE, lowercase, Capitalized Case, and Sentence case. Secure, browser-side conversion with word count.",
  keywords: ["case converter", "text converter", "uppercase", "lowercase", "title case", "sentence case", "convert text case"],
};

export default function CaseConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
