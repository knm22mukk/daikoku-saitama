import Image from 'next/image';

import { galleryItems } from '@/_constants';

import Container from './Container';
import PageHeader from './PageHeader';

export default function Gallery() {
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <PageHeader
        subHeading='products'
        title='大黒工業株式会社の製造商品'
        description='当社で製造している製品の一部をご紹介します'
      />
      <Container>
        <div className='mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-8'>
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className='group relative mx-auto flex h-48 w-48 items-end justify-center overflow-hidden rounded-lg shadow-lg lg:h-56 lg:w-56'
            >
              <Image
                src={item.image}
                height={200}
                width={200}
                alt={item.title}
                className='absolute h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
              <span className='relative mb-2 inline-block text-sm font-semibold text-gray-800 md:text-lg'>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
