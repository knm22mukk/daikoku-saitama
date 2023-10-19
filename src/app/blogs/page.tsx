import BlogCard from '@/_components/BlogCard';
import { getBlogList } from '@/_libs/microcms';

export default async function Blogs() {
  const data = await getBlogList();
  return (
    <>
      <h3>ブログ記事一覧</h3>
      <BlogCard blogs={data.contents} />
    </>
  );
}
