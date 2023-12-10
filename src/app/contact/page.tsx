import { Metadata } from 'next';

import Breadcrumb from '@/_components/Breadcrumb';
import ContactForm from '@/_components/ContactForm';
import Container from '@/_components/Container';
import PageHeader from '@/_components/PageHeader';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'お問い合わせページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Contact() {
  return (
    <>
      <Breadcrumb lists={[{ name: 'お問い合わせ' }]} />
      <PageHeader
        subHeading='contact'
        title='お問い合わせ'
        description='お問い合わせはこちらのページからお願いいたします。商品に関して、記事に関して、サイトについて、お気軽にお問い合わせください。担当者より3営業日以内にご連絡させていただきます。'
      />
      <Container>
        <ContactForm />
      </Container>
    </>
  );
}
