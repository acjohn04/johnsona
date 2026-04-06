'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ThemeToggle } from './ThemeToggle';
import { LocaleSwitcher } from './LocaleSwitcher';
import styles from './TopAppBar.module.css';

export const TopAppBar = () => {
  const t = useTranslations('Navigation');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Select all sections on the page with an ID
    const sections = document.querySelectorAll('section[id]');
    
    // Create an intersection observer and update state based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Triggers the active state when a section's middle crosses the viewport's middle
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.c_top_app_bar}>
      <div className={`o-container ${styles.c_top_app_bar__inner}`}>
        <Link href="/" className={styles.c_top_app_bar__logo}>
          Adam Johnson
        </Link>

        <div className={styles.c_top_app_bar__desktop_nav}>
          <Link 
            href="#about" 
            className={`${styles.c_top_app_bar__nav_link} ${activeSection === 'about' ? styles['c_top_app_bar__nav_link--active'] : ''}`}
          >
            {t('about')}
          </Link>
          <Link 
            href="#skills" 
            className={`${styles.c_top_app_bar__nav_link} ${activeSection === 'skills' ? styles['c_top_app_bar__nav_link--active'] : ''}`}
          >
            {t('skills')}
          </Link>
          <Link 
            href="#contact" 
            className={`${styles.c_top_app_bar__nav_link} ${activeSection === 'contact' ? styles['c_top_app_bar__nav_link--active'] : ''}`}
          >
            {t('contact')}
          </Link>
        </div>

        <div className={styles.c_top_app_bar__actions}>
          <LocaleSwitcher />
          <ThemeToggle />
          <Link href="#contact" className={styles.c_button_primary}>
            {t('hireMe')}
          </Link>
        </div>
      </div>
    </nav>
  );
};
