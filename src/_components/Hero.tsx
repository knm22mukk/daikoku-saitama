import Image from 'next/image';
import Link from 'next/link';

import { OutlineButton, PrimaryButton } from '@/_components/Button';

export default function Hero() {
  return (
    <section className='py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row'>
          <div className='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-24'>
            <p className='mb-4 font-semibold text-blue-500 md:mb-6 md:text-lg xl:text-xl'>
              Daikoku Saitama
            </p>

            <h1 className='mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl'>
              大黒工業株式会社
              <br /> 埼玉営業所
            </h1>

            <p className='mb-8 leading-relaxed text-gray-500 dark:text-white md:mb-12 lg:w-4/5 xl:text-lg'>
              このサイトは大黒工業株式会社の公式サイトではありません。営業が独自に新商品や最新情報を発信するブログサイトです。
            </p>

            <div className='flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start'>
              <Link href='/blogs'>
                <PrimaryButton type='button' name='ブログ一覧へ' />
              </Link>
              <a href='http://daikoku-com.jp/' target='_blank'>
                <OutlineButton type='button' name='公式サイトはこちら' />
              </a>
            </div>
          </div>

          <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12'>
            <Image
              src='/images/moldimage1280x650.webp'
              alt='Photo by Fakurian Design'
              width={1000}
              height={500}
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
