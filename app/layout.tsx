import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMO BizHub",
  description:
    "Innovation Driven and Digital Service based platform that connects people and creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use system font to avoid Google Fonts fetch errors */}
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}