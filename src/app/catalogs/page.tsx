import CatalogCard from '@/_components/CatalogCard';
import { getCatalogList } from '@/_libs/microcms';

export default async function Catarog() {
  const data = await getCatalogList();
  return (
    <>
      <h2>カタログ一覧ページ</h2>
      <CatalogCard catalogs={data.contents} />
    </>
  );
}
