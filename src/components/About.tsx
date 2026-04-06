import { useTranslations } from 'next-intl';
import { AboutHighlight } from './AboutHighlight';
import styles from './About.module.css';

export const About = () => {
  const t = useTranslations('About');

  return (
    <section id="about" className={styles.c_about}>
      <div className={`o-container o-grid o-grid--12 ${styles.c_about__inner}`}>
        
        <div className={styles.c_about__header}>
          <h2 className={styles.c_about__title}>{t('title')}</h2>
        </div>
        
        <div className={styles.c_about__content}>
          <p className={styles.c_about__narrative}>
            {t('narrative')}
          </p>
          
          <div className={styles.c_about__highlights}>
            <AboutHighlight 
              icon="groups" 
              title={t('highlight1.title')} 
              description={t('highlight1.description')}
            />
            <AboutHighlight 
              icon="architecture" 
              title={t('highlight2.title')} 
              description={t('highlight2.description')}
            />
            <AboutHighlight 
              icon="flowchart" 
              title={t('highlight3.title')} 
              description={t('highlight3.description')}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
