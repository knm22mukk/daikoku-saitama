'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Thanks() {
  const router = useRouter();
  return (
    <>
      <h2>お問合せが正常に送信完了しました！</h2>
      <div>
        <button type='button' onClick={() => router.back()}>
          前のページに戻る
        </button>
        <button type='button'>
          <Link href='/'>トップに戻る</Link>
        </button>
      </div>
    </>
  );
}
