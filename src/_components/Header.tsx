import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

import { pageLinks } from '@/_constants';

import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className='bg-white dark:bg-gray-800'>
      <nav className='w-full border-b border-gray-200 dark:border-gray-600'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <Image
              src=''
              className='h-8'
              width={200}
              height={100}
              alt='大黒工業株式会社 埼玉営業所'
            />
          </Link>
          <div className='flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0'>
            <ThemeSwitch />
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <AiOutlineMenu />
            </button>
          </div>
          <div
            className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
            id='navbar-sticky'
          >
            <ul className='mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:p-0'>
              {pageLinks.map((link) => (
                <li
                  key={link.title}
                  className='px-3 py-2 font-bold hover:text-blue-700 hover:underline md:p-0'
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
