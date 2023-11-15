import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

import { pageLinks } from '@/_constants';

import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className='bg-[#3d3d3d]'>
      <nav className='w-full border-b border-gray-200 dark:border-gray-600'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <Image
              src='/images/daikoku-logo.png'
              width={282}
              height={70}
              alt='大黒工業株式会社'
            />
          </Link>
          <div className='flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0'>
            <ThemeSwitch />
            <button
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-xl text-white hover:bg-gray-200 hover:text-gray-800 md:hidden'
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
                  className='px-3 py-2 font-bold text-white hover:underline md:p-0'
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
