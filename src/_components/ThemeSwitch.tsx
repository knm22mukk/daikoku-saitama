'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
      {/* {mounted ?? <span>{theme === 'dark' ? 'ライト' : 'ダーク'}</span>} */}
      テーマ変更
    </button>
  );
}
