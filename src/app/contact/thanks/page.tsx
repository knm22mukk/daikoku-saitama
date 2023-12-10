import { Metadata } from 'next';

import Breadcrumb from '@/_components/Breadcrumb';
import ContactResult from '@/_components/ContactResult';
import Container from '@/_components/Container';
import PageHeader from '@/_components/PageHeader';

export const metadata: Metadata = {
  title: 'お問い合わせ完了',
  description:
    'お問い合わせ完了ページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Thanks() {
  return (
    <>
      <Breadcrumb
        lists={[{ name: 'お問い合わせ', path: '/contact' }, { name: 'お問い合わせ完了' }]}
      />
      <div className='py-6 sm:py-8 lg:py-12'>
        <PageHeader
          subHeading='complete'
          title='お問合せが正常に送信できました'
          description='お問合せいただきありがとうございます。担当者より3営業日以内にご連絡させていただきます。'
        />
        <Container>
          <ContactResult />
        </Container>
      </div>
    </>
  );
}
