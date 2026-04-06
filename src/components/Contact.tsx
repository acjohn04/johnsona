import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Contact.module.css';

export const Contact = () => {
  const tc = useTranslations('Contact');
  const tf = useTranslations('Footer');

  return (
    <section id="contact" className={styles.c_contact}>
      <div className={`o-container ${styles.c_contact__inner}`}>
        <h2 className={styles.c_contact__title}>
          {tc('title')}<span className="u-italic u-text-primary">{tc('titleVariant')}</span>.
        </h2>
        <p className={styles.c_contact__subtitle}>
          {tc('subtitle')}
        </p>

        <div className={styles.c_contact__actions}>
          <a href="mailto:acjohn04@gmail.com" className={styles.c_contact__button}>
            {tc('button')}
          </a>
          <div className={styles.c_contact__socials}>
            <Link href={`${tf('linkedinUrl')}`} className={styles.c_contact__social_link} aria-label="LinkedIn">
              <span className="material-symbols-outlined">link</span>
            </Link>
            <Link href={`${tf('githubUrl')}`} className={styles.c_contact__social_link} aria-label="GitHub">
              <span className="material-symbols-outlined">hub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
