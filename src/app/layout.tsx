import Header from '@/_components/Header';
import Provider from '@/_components/ThemeProvider';
import '@/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大黒埼玉',
  description: '大黒埼玉の特設サイトです',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className='text-gray-800 dark:bg-gray-800 dark:text-white'>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
