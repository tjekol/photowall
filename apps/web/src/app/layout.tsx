import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Photography gallery',
  description: 'A gallery of my photography taken by Thea Jenny E. Kolnes',
};

export default function DefaultLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
