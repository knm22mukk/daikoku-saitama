'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import ThemeSwitch from '@/_components/ThemeSwitch';
import { pageLinks } from '@/_constants/pageLinks';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='flex items-center justify-between bg-[#3D3D3D] px-3 py-5'>
      <Link href='/'>
        <Image
          src='/images/daikoku-logo.png'
          height={56}
          width={224}
          alt='大黒工業株式会社'
        />
      </Link>
      <div className='flex items-center space-x-4 leading-5 md:space-x-6'>
        {pageLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className='hidden font-medium text-white hover:underline sm:block'
          >
            {link.title}
          </Link>
        ))}
        <button
          aria-label='ToggleMenu'
          onClick={handleClick}
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-xl text-white hover:bg-gray-100 hover:text-gray-800 sm:hidden'
        >
          <AiOutlineMenu />
        </button>
        <ThemeSwitch />
        <div
          className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-900 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex justify-end'>
            <button
              className='mr-8 mt-11 h-8 w-8 text-2xl'
              aria-label='ToggleMenu'
              onClick={handleClick}
            >
              <AiOutlineClose />
            </button>
          </div>
          <nav className='fixed mt-8 h-full'>
            {pageLinks.map((link) => (
              <div key={link.title} className='px-12 py-4'>
                <Link
                  href={link.path}
                  className='text-2xl font-bold tracking-widest hover:underline dark:text-gray-100'
                  onClick={handleClick}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
