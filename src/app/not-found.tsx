import { Metadata } from 'next';
import Link from 'next/link';

import { PrimaryButton } from '@/_components/Button';
import PageHeader from '@/_components/PageHeader';

export const metadata: Metadata = {
  title: '404エラー',
  description:
    'ページが見つかりませんでした || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function NotFound() {
  return (
    <div className='py-24 sm:py-32'>
      <PageHeader
        subHeading='404 not found'
        title='ページが見つかりませんでした'
        description='指定されたURLのページは存在しません。サイト更新などによりURLが変更になったか、URLが正しく入力されていない可能性があります。'
      />
      <div className='mt-6 flex justify-center'>
        <Link href='/'>
          <PrimaryButton type='button' name='ホームに戻る' />
        </Link>
      </div>
    </div>
  );
}
