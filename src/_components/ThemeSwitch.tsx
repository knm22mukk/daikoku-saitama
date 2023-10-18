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
    >
      {mounted && <>{theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}</>}
    </button>
  );
}
