import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.c_footer}>
      <div className={`o-container ${styles.c_footer__inner}`}>
        <div className={styles.c_footer__brand}>
          <span className={styles.c_footer__name}>Adam Johnson</span>
          <span className={styles.c_footer__copyright}>
            &copy; {new Date().getFullYear()} Adam Johnson. {t('builtWith')}
          </span>
        </div>
        
        <div className={styles.c_footer__links}>
          <Link href={t('githubUrl')} className={styles.c_footer__link}>
            {t('github')}
          </Link>
          <Link href={t('linkedinUrl')} className={styles.c_footer__link}>
            {t('linkedin')}
          </Link>
        </div>
      </div>
    </footer>
  );
};
