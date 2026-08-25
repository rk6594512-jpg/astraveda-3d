import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SiddhaKarm.AI — Digital Ashram & Vedic Trust',
  description: 'Truth-First Spiritual Guidance. Eliminating Commercial Fraud. Restoring Vedic Trust.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className="bg-[#070D14] text-[#F0F4F8] antialiased min-h-screen overflow-x-hidden selection:bg-[#D4A017]/30">
        {children}
      </body>
    </html>
  );
}
