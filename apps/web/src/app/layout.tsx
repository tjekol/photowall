import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Toast } from '@heroui/react';

export const metadata: Metadata = {
  title: 'Photography gallery',
  description: 'A gallery of my photography taken by Thea Jenny E. Kolnes',
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light' data-theme='light'>
      <body className='bg-background text-foreground'>
        <main className='flex flex-col min-h-screen items-center p-6 lg:p-10'>
          <h1 className='font-semi-bold m-2'>
            <a href='/'>Photo Wall</a>
          </h1>
          {children}
        </main>
        <Toast.Provider />
      </body>
    </html>
  );
}
