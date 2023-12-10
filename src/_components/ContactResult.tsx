'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { OutlineButton, PrimaryButton } from '@/_components/Button';

export default function ContactResult() {
  const router = useRouter();
  return (
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
  );
}
