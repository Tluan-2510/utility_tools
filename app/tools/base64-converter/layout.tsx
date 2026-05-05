import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder - Fast & Secure Online Tool",
  description: "Free online Base64 converter. Encode text to Base64 or decode Base64 to text instantly. Secure, browser-side conversion for developers with UTF-8 support.",
  keywords: ["base64 converter", "base64 encoder", "base64 decoder", "text to base64", "base64 to text"],
};

export default function Base64Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
