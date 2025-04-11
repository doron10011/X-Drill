import './globals.css';
import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';

const heebo = Heebo({ 
  subsets: ['latin', 'hebrew'],
  variable: '--font-heebo',
});

export const metadata: Metadata = {
  title: 'X-Drill - כלי קידוח יהלום מקצועיים',
  description: 'חנות מקוונת של X-Drill, המספקת כלי קידוח יהלום איכותיים ומקצועיים לבטון, בטון מזוין ואבן',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${heebo.className} min-h-screen flex flex-col w-full overflow-x-hidden`}>
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
