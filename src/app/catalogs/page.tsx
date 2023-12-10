import { Metadata } from 'next';

import Breadcrumb from '@/_components/Breadcrumb';
import CatalogCard from '@/_components/CatalogCard';
import PageHeader from '@/_components/PageHeader';
import { getCatalogList } from '@/_libs/microcms';

export const metadata: Metadata = {
  title: 'カタログ一覧',
  description:
    'カタログ一覧ページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default async function Catarog() {
  const data = await getCatalogList({ limit: 20 });
  return (
    <>
      <Breadcrumb lists={[{ name: 'カタログ' }]} />
      <PageHeader
        subHeading='catalog'
        title='カタログ一覧'
        description='大黒工業株式会社のカタログ一覧ページです。カタログ画像をクリックするとWEBカタログ（外部リンク）をご覧いただけます。'
      />
      <CatalogCard catalogs={data.contents} />
    </>
  );
}
