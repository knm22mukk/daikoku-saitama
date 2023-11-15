'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type='button'
      aria-label='ThemeChangeButton'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
    >
      {mounted && <>{theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}</>}
    </button>
  );
}
