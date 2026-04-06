import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  name: string;
  percentage: number;
}

export const ProgressBar = ({ name, percentage }: ProgressBarProps) => {
  return (
    <div className={styles.c_progress_bar}>
      <div className={styles.c_progress_bar__header}>
        <span className={styles.c_progress_bar__name}>{name}</span>
        <span className={styles.c_progress_bar__percentage}>{percentage}%</span>
      </div>
      <div className={styles.c_progress_bar__track}>
        <div 
          className={styles.c_progress_bar__fill} 
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        ></div>
      </div>
    </div>
  );
};
