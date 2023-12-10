import { Metadata } from 'next';

import BlogCard from '@/_components/BlogCard';
import Breadcrumb from '@/_components/Breadcrumb';
import PageHeader from '@/_components/PageHeader';
import { getBlogList } from '@/_libs/microcms';

export const metadata: Metadata = {
  title: 'ブログ一覧',
  description:
    'ブログ一覧ページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default async function Blogs() {
  const blogData = await getBlogList();
  return (
    <>
      <Breadcrumb lists={[{ name: 'ブログ' }]} />
      <PageHeader
        subHeading='blogs'
        title='ブログ記事一覧'
        description='包装資材に関する新商品やおすすめ商品などを随時発信していきます。商品以外に関する情報もご案内しますので是非ご覧ください。'
      />
      <BlogCard blogs={blogData.contents} />
    </>
  );
}
