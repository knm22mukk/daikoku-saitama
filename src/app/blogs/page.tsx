import BlogCard from '@/_components/BlogCard';
import PageHeader from '@/_components/PageHeader';
import { getBlogList } from '@/_libs/microcms';

export default async function Blogs() {
  const data = await getBlogList();
  return (
    <>
      <PageHeader
        subHeading='blogs'
        title='ブログ記事一覧'
        description='包装資材に関する新商品やおすすめ商品などを随時発信していきます。商品以外に関する情報もご案内しますので是非ご覧ください。'
      />
      <BlogCard blogs={data.contents} />
    </>
  );
}
