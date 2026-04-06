import { useTranslations } from 'next-intl';
import { SkillCategory } from './SkillCategory';
import styles from './Skills.module.css';

export const Skills = () => {
  const t = useTranslations('Skills');

  const frontendSkills = [
    { name: t('items.core'), percentage: 95 },
    { name: t('items.vue'), percentage: 90 },
    { name: t('items.react'), percentage: 80 },
    { name: t('items.cwv'), percentage: 90 },
    { name: t('items.a11y'), percentage: 90 },
  ];

  const backendSKills = [
    { name: t('items.node'), percentage: 70 },
    { name: t('items.symfony'), percentage: 60 },
  ]

  const leadershipSkills = [
    { name: t('items.mentorship'), percentage: 90 },
    { name: t('items.systemDesign'), percentage: 80 },
    { name: t('items.agile'), percentage: 90 },
    { name: t('items.planning'), percentage: 90 },
    { name: t('items.collaboration'), percentage: 90 },
  ];

  const infrastructureSkills = [
    { name: t('items.aws'), percentage: 80 },
    { name: t('items.gcp'), percentage: 70 },
    { name: t('items.cicd'), percentage: 90 },
  ];

  const toolingSkills = [
    { name: t('items.figma'), percentage: 90 },
    { name: t('items.github'), percentage: 90 },
    { name: t('items.storybook'), percentage: 90 },
    { name: t('items.cypress'), percentage: 80 },
    { name: t('items.newrelic'), percentage: 90 },  
  ];

  const aiSkills = [
    { name: t('items.gemini'), percentage: 90 },
    { name: t('items.claudeCode'), percentage: 80 },
    { name: t('items.copilot'), percentage: 80 },
  ];

  return (
    <section id="skills" className={styles.c_skills}>
      <div className="o-container">
        <h2 className={styles.c_skills__title}>
          {t('title')}<span className="u-text-primary">{t('titleVariant')}</span>
        </h2>
        
        <div className={`o-grid ${styles.c_skills__grid}`}>
          <SkillCategory title={t('categories.frontend')} skills={frontendSkills} />
          <SkillCategory title={t('categories.backend')} skills={backendSKills} />
          <SkillCategory title={t('categories.leadership')} skills={leadershipSkills} />
          <SkillCategory title={t('categories.infrastructure')} skills={infrastructureSkills} />
          <SkillCategory title={t('categories.tooling')} skills={toolingSkills} />
          <SkillCategory title={t('categories.ai')} skills={aiSkills} />
        </div>
      </div>
    </section>
  );
};
