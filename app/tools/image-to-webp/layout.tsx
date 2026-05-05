import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to WebP Converter - Convert PNG/JPG to WebP Online",
  description: "Free online image to WebP converter. Convert PNG, JPG, and JPEG images to WebP format instantly in your browser. 100% secure with no server uploads.",
  keywords: ["image to webp", "convert png to webp", "convert jpg to webp", "webp converter", "online image converter", "browser-based converter"],
};

export default function ImageToWebPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
