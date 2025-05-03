import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bimal Pandey | VS Code Theme & Full Stack Developer',
  description: 'Portfolio showcasing VS Code themes and full stack development projects by Bimal Pandey',
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
