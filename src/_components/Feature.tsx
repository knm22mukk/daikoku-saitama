import { BsCheck2Circle } from 'react-icons/bs';

import Container from '@/_components/Container';
import PageHeader from '@/_components/PageHeader';
import { featureItems } from '@/_constants';

export default function Feature() {
  return (
    <section className='bg-white py-6 dark:bg-gray-600 sm:py-8 lg:py-12'>
      <Container>
        <PageHeader
          subHeading='feature'
          title='大黒工業株式会社の強み'
          description='当社の特徴や強みを紹介します'
        />
        <div className='grid gap-8 py-6 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16'>
          {featureItems.map((item) => (
            <div key={item.title} className='flex gap-4 md:gap-6'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500 shadow-lg md:h-14 md:w-14 md:rounded-xl'>
                <BsCheck2Circle className='h-8 w-8 text-white' />
              </div>
              <div>
                <h3 className='mb-2 text-lg font-semibold md:text-xl'>{item.title}</h3>
                <p className='mb-2 text-gray-500 dark:text-white'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
