import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className={`o-container o-grid o-grid--12 ${styles.c_hero}`}>
      <div className={styles.c_hero__content}>
        <h1 className={styles.c_hero__title}>
          {t('titlePrefix')} <span className="u-italic u-text-primary">{t('titleVariant')} </span> {t('titleSuffix')}
        </h1>
        <p className={styles.c_hero__subtitle}>
          {t('subtitle')}
        </p>

        <div className={styles.c_hero__actions}>
          <Link href="#skills" className={styles.c_hero__link}>
            {t('expertise')}
          </Link>
          <div className={styles.c_hero__badge}>
            <span aria-hidden="true" className={styles.c_hero__terminal_icon}>{'>_'}</span>
            <span>{t('location')}</span>
          </div>
        </div>
      </div>

      <div className={styles.c_hero__visual}>
        <div className={styles.c_hero__image_wrapper}>
          <Image
            src="/adam.jpg"
            alt="Adam Johnson Professional Portrait"
            width={1067}
            height={1600}
            className={styles.c_hero__image}
            priority
          />
        </div>
        <div className={styles.c_hero__glow} aria-hidden="true"></div>
      </div>
    </section>
  );
};
