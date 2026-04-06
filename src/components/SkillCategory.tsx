import { ProgressBar } from './ProgressBar';
import styles from './SkillCategory.module.css';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className={styles.c_skill_category}>
      <h3 className={styles.c_skill_category__title}>
        {title}
      </h3>
      <div className={styles.c_skill_category__list}>
        {skills.map((skill) => (
          <ProgressBar key={skill.name} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};
