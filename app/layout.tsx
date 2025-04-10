import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Rubik font works well for Hebrew and Latin characters
const rubik = Rubik({ 
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "X-Drill - כלי קידוח יהלום מקצועיים",
  description: "חנות מקוונת לכלי קידוח יהלום מקצועיים, המיועדים לקבלנים, שיפוצניקים ובעלי מקצוע בישראל. מגוון רחב של כוסות קידוח, מסורי יהלום ואביזרים נלווים.",
  keywords: "קידוח יהלום, כוסות קידוח, מסורי יהלום, אביזרי קידוח, כלי עבודה מקצועיים, כלי קידוח לקבלנים, ציוד לשיפוצניקים",
  authors: [{ name: "X-Drill" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={rubik.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
