import Link from 'next/link';

import { pageLinks } from '@/_constants/pageLinks';

export default function Footer() {
  return (
    <footer className='w-full border-t border-gray-200 bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between'>
      <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        © 2023{' '}
        <Link href='/' className='hover:underline'>
          Daikoku Industry
        </Link>
        . All Rights Reserved.
      </span>
      <ul className='mt-5 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0'>
        {pageLinks.map((link) => (
          <li key={link.title} className='me-6 hover:underline'>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
