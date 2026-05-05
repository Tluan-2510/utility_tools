import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strong Password Generator - Create Secure Passwords Online",
  description: "Generate strong, secure, and random passwords instantly with our free online tool. Customize length, include symbols, numbers, and uppercase letters. 100% private and secure.",
  keywords: ["password generator", "strong password", "secure password", "random password", "password creator", "security tool"],
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
