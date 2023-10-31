import Image from 'next/image';

import Container from '@/_components/Container';
import { Catalog } from '@/_libs/microcms';

type Props = {
  catalogs: Catalog[];
};

export default function CatalogCard({ catalogs }: Props) {
  if (!catalogs || catalogs.length === 0) {
    return <p>カタログがありません。</p>;
  }
  return (
    <Container>
      <div className='grid grid-cols-2 gap-x-6 gap-y-10 py-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
        {catalogs.map((catalog) => (
          <a
            key={catalog.id}
            href={`http://dcs4.icata.net/iportal/oc.do?v=DKU00001&d=DKUD001&c=${catalog.path}&p=1`}
            className='rounded-md p-2'
          >
            <div className='overflow-hidden shadow-md lg:h-80'>
              <Image
                src={catalog.eyecatch.url}
                alt={catalog.title}
                width={160}
                height={230}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <h3 className='text-md mt-3 text-center font-bold'>{catalog.title}</h3>
          </a>
        ))}
      </div>
    </Container>
  );
}
