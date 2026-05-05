import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - Free Placeholder Text Tool",
  description: "Generate custom Lorem Ipsum placeholder text for your designs. Choose number of paragraphs or sentences. Fast, free, and easy to copy for web designers and developers.",
  keywords: ["lorem ipsum generator", "placeholder text", "filler text", "dummy text generator", "lorem ipsum online"],
};

export default function LoremIpsumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
