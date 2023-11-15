'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import ThemeSwitch from '@/_components/ThemeSwitch';
import { pageLinks } from '@/_constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='h-24 w-full border-b border-gray-200 bg-[#3d3d3d] dark:border-gray-600'>
      <nav className=''>
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
              onClick={handleClick}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
          <div className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'>
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
        <div className='mx-3 md:hidden'>
          <div
            className={`fixed right-0 top-24 z-20 h-full w-full bg-gray-300 opacity-95 duration-300 ease-in-out dark:bg-gray-600 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <nav className='fixed h-full w-full py-10'>
              {pageLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className='flex justify-center py-5 text-2xl font-bold tracking-wide hover:underline'
                  onClick={handleClick}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
