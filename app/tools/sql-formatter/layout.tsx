import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Formatter - Online MySQL, Postgres & SQL Server Prettifier",
  description: "Format and prettify your SQL queries online. Supports MySQL, PostgreSQL, and SQL Server. Free, secure, and instant SQL formatting tool for developers.",
  keywords: ["sql formatter", "sql prettifier", "mysql formatter", "postgresql formatter", "sql server formatter", "format sql online"],
};

export default function SqlFormatterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
