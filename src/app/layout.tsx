import Header from '@/_components/Header';
import Provider from '@/_components/ThemeProvider';
import '@/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'おとちブログ',
  description: '包装資材に関する情報を配信するおとちの個人ブログです',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className='dark:bg-gray-800 dark:text-white'>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
