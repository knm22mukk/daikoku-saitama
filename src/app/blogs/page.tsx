import { getBlogList } from '@/_libs/microcms';
import Card from '@/app/_components/Card';

export default async function Blogs() {
  const data = await getBlogList();
  return (
    <>
      <h3>ブログ記事一覧</h3>
      <Card blogs={data.contents} />
    </>
  );
}
