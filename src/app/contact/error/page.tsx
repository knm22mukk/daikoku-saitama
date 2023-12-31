import { Metadata } from 'next';

import Breadcrumb from '@/_components/Breadcrumb';
import ContactResult from '@/_components/ContactResult';
import Container from '@/_components/Container';
import PageHeader from '@/_components/PageHeader';

export const metadata: Metadata = {
  title: 'お問い合わせエラー',
  description:
    'お問い合わせエラー || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Error() {
  return (
    <>
      <Breadcrumb
        lists={[
          { name: 'お問い合わせ', path: '/contact' },
          { name: 'お問い合わせエラー' },
        ]}
      />
      <div className='py-6 sm:py-8 lg:py-12'>
        <PageHeader
          subHeading='error'
          title='お問合せ送信中にエラーが発生しました'
          description='大変申し訳ございませんが、送信中にエラーが発生しました。再度、時間を空けて送信をお願いいたします。'
        />
        <Container>
          <ContactResult />
        </Container>
      </div>
    </>
  );
}
