import Image from 'next/image';

import { Catalog } from '@/_libs/microcms';

type Props = {
  catalogs: Catalog[];
};

export default function CatalogCard({ catalogs }: Props) {
  if (!catalogs || catalogs.length === 0) {
    return <p>カタログがありません。</p>;
  }
  return (
    <ul>
      {catalogs.map((catalog) => (
        <li key={catalog.id}>
          <a
            href={`http://dcs4.icata.net/iportal/oc.do?v=DKU00001&d=DKUD001&c=${catalog.path}&p=1`}
            target='_blank'
          >
            <Image
              src={catalog.eyecatch.url}
              height={200}
              width={150}
              alt={catalog.title}
            />
          </a>
          <p>{catalog.title}</p>
        </li>
      ))}
    </ul>
  );
}
