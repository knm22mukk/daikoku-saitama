import Header from '@/_components/Header';
import '@/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'おとちブログ',
  description: '包装資材に関する情報を配信するおとちの個人ブログです',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
