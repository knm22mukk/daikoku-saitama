import Image from 'next/image';
import Link from 'next/link';

import { OutlineButton } from './Button';
import Container from './Container';

export default function CallToAction() {
  return (
    <section className='py-6'>
      <Container>
        <div className='flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80'>
          <div className='order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5'>
            <Image
              src='/images/moldimage1280x650.webp'
              width={1280}
              height={650}
              alt='Photo by Andras Vas'
              className='h-full w-full object-cover object-center'
            />
          </div>

          <div className='flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5'>
            <h2 className='mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'>
              お気軽にお問い合わせください
            </h2>

            <p className='mb-8 max-w-md text-gray-600'>
              商品やサイトに関してなどお問合せがございましたらお問い合わせフォームよりご連絡をお願いいたします。
              <br />
              担当者より別途ご回答させていただきます。
            </p>

            <div className='mt-auto'>
              <Link href='/contact'>
                <OutlineButton type='button' name='お問い合わせ' />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
