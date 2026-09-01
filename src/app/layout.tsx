import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnPaper | Project-Based Technical Interview Readiness Platform",
  description:
    "Turn any software repository into a structured, stateful interview-preparation curriculum with explicit rubric calibration, sandbox coding exercises, and FSRS spaced repetition.",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
