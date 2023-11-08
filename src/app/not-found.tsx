import Link from 'next/link';

import { PrimaryButton } from '@/_components/Button';
import PageHeader from '@/_components/PageHeader';

export default function NotFound() {
  return (
    <div className='h-screen py-6 sm:py-8 lg:py-12'>
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
