'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { OutlineButton, PrimaryButton } from '@/_components/Button';
import Container from '@/_components/Container';
import PageHeader from '@/_components/PageHeader';

export default function Error() {
  const router = useRouter();
  return (
    <div className='h-screen'>
      <PageHeader
        subHeading='error'
        title='お問合せ送信中にエラーが発生しました'
        description='大変申し訳ございませんが、送信中にエラーが発生しました。再度、時間を空けて送信をお願いいたします。'
      />
      <Container>
        <div className='flex justify-center'>
          <PrimaryButton
            type='button'
            name='前のページに戻る'
            onClick={() => router.back()}
          />
          <Link href='/'>
            <OutlineButton type='button' name='トップに戻る' />
          </Link>
        </div>
      </Container>
    </div>
  );
}
