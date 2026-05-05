import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Counter - Free Online Word & Character Count Tool",
  description: "Count words, characters, and lines in real-time. Estimate reading time and improve your writing. Free, fast, and secure online word counter for students and professionals.",
  keywords: ["word counter", "character counter", "line counter", "reading time calculator", "word count online"],
};

export default function WordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
