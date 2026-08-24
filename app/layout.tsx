import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tarun | Cosmic 3D Intelligence',
  description: 'Next-Gen Spatial Vedic Computing & Neural Palmistry Engine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030408] text-[#F4EFE6] antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
