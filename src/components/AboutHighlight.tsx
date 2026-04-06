import styles from './AboutHighlight.module.css';

interface AboutHighlightProps {
  icon: string;
  title: string;
  description: string;
}

export const AboutHighlight = ({ icon, title, description }: AboutHighlightProps) => {
  return (
    <div className={styles.c_about_highlight}>
      <span className={`material-symbols-outlined ${styles.c_about_highlight__icon}`} aria-hidden="true">
        {icon}
      </span>
      <h3 className={styles.c_about_highlight__title}>{title}</h3>
      <p className={styles.c_about_highlight__description}>{description}</p>
    </div>
  );
};
