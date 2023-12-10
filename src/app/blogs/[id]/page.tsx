import { Metadata } from 'next';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';

import Breadcrumb from '@/_components/Breadcrumb';
import Container from '@/_components/Container';
import ConvertDate from '@/_components/ConvertDate';
import PageHeader from '@/_components/PageHeader';
import { getBlogDetail } from '@/_libs/microcms';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlogDetail(params.id);
  return {
    title: data.title,
    description: `${data.description} || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです`,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.eyecatch.url,
    },
  };
}

export default async function BlogId({ params }: Props) {
  const data = await getBlogDetail(params.id);
  return (
    <>
      <Breadcrumb
        lists={[
          { name: 'ブログ', path: '/blogs' },
          { name: data.title, path: `/blogs/${data.id}` },
        ]}
      />
      <PageHeader
        subHeading={data.id}
        title={data.title}
        description={data.description}
      />
      <div className='my-3 flex justify-center'>
        <Image
          src={data.eyecatch.url}
          alt={data.title}
          width={945}
          height={630}
          className=''
        />
      </div>
      <Container>
        <div className='flex items-center py-2 text-gray-500 dark:text-white'>
          <AiOutlineClockCircle className='h-6 w-6' aria-hidden='true' />
          <div className='ml-2 text-2xl font-semibold leading-8'>
            <ConvertDate convertDate={data.publishedAt} />
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: `${data.body}` }}
          className='prose max-w-none py-6 dark:prose-invert lg:prose-lg'
        />
      </Container>
    </>
  );
}
