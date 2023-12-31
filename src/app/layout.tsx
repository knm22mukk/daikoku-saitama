import Footer from '@/_components/Footer';
import Header from '@/_components/Header';
import Provider from '@/_components/ThemeProvider';
import '@/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    template: '%s | 大黒工業 営業ブログ',
    default: '大黒工業 営業ブログ',
  },
  description: '大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
  openGraph: {
    title: {
      template: '%s | 大黒工業 営業ブログ',
      default: '大黒工業 営業ブログ',
    },
    description: '大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
    type: 'website',
    images: '/images/moldimage1280x650.webp',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className='flex min-h-screen flex-col bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-white'>
        <Provider>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
