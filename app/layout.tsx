import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bimal Pandey | Full Stack Developer',
  description: 'Portfolio showcasingfull stack development projects by Bimal Pandey',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1e1e1e] text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
