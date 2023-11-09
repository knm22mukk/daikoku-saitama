'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { OutlineButton, PrimaryButton } from '@/_components/Button';
import Container from '@/_components/Container';
import PageHeader from '@/_components/PageHeader';

export default function Thanks() {
  const router = useRouter();
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <PageHeader
        subHeading='complete'
        title='お問合せが正常に送信できました'
        description='お問合せいただきありがとうございます。担当者より3営業日以内にご連絡させていただきます。'
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