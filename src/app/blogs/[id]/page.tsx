import Image from 'next/image';

import { getBlogDetail } from '@/_libs/microcms';

type Props = {
  params: {
    id: string;
  };
};

export default async function BlogId({ params }: Props) {
  const data = await getBlogDetail(params.id);
  return (
    <>
      <Image src={data.image.url} alt={data.title} width={384} height={216} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: `${data.body}` }} />
    </>
  );
}
