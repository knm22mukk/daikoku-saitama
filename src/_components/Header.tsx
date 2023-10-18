import Link from 'next/link';

import { pageLinks } from '@/_constants';

import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className='flex border-b-2 bg-blue-400'>
      <Link href='/'>大黒埼玉</Link>
      <nav>
        <ul className='px-4'>
          {pageLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSwitch />
    </header>
  );
}
