'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import styles from './ThemeToggle.module.css'; // Let's reuse theme toggle styles for the language button

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      className={styles.c_theme_toggle}
      onClick={toggleLocale}
      disabled={isPending}
      aria-label="Toggle Language"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
};
