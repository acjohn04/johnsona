'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className={styles.c_theme_toggle_placeholder} aria-hidden="true" />;
  }

  return (
    <button
      className={styles.c_theme_toggle}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};
