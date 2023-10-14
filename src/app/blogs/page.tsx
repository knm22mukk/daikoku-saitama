import Card from '@/_components/Card';
import { getBlogList } from '@/_libs/microcms';

export default async function Blogs() {
  const data = await getBlogList();
  return (
    <>
      <h3>ブログ記事一覧</h3>
      <Card blogs={data.contents} />
    </>
  );
}
