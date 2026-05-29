<script lang="ts">
	import { locale, useTranslations, type Locale } from '$lib/i18n';
	import SkillCategory from './SkillCategory.svelte';

	let currentLocale: Locale = $state('en');
	locale.subscribe((v) => (currentLocale = v));

	let t = $derived(useTranslations(currentLocale, 'Skills'));

	let frontendSkills = $derived([
		{ name: t('items.core'), percentage: 95 },
		{ name: t('items.vue'), percentage: 90 },
		{ name: t('items.react'), percentage: 80 },
		{ name: t('items.cwv'), percentage: 90 },
		{ name: t('items.a11y'), percentage: 90 }
	]);

	let backendSkills = $derived([
		{ name: t('items.node'), percentage: 70 },
		{ name: t('items.symfony'), percentage: 60 }
	]);

	let leadershipSkills = $derived([
		{ name: t('items.mentorship'), percentage: 90 },
		{ name: t('items.systemDesign'), percentage: 80 },
		{ name: t('items.agile'), percentage: 90 },
		{ name: t('items.planning'), percentage: 90 },
		{ name: t('items.collaboration'), percentage: 90 }
	]);

	let infrastructureSkills = $derived([
		{ name: t('items.aws'), percentage: 80 },
		{ name: t('items.gcp'), percentage: 70 },
		{ name: t('items.cicd'), percentage: 90 }
	]);

	let toolingSkills = $derived([
		{ name: t('items.figma'), percentage: 90 },
		{ name: t('items.github'), percentage: 90 },
		{ name: t('items.storybook'), percentage: 90 },
		{ name: t('items.cypress'), percentage: 80 },
		{ name: t('items.newrelic'), percentage: 90 }
	]);

	let aiSkills = $derived([
		{ name: t('items.gemini'), percentage: 90 },
		{ name: t('items.claudeCode'), percentage: 80 },
		{ name: t('items.copilot'), percentage: 80 }
	]);
</script>

<section id="skills" class="c-skills">
	<div class="o-container">
		<h2 class="c-skills__title">
			{t('title')}<span class="u-text-primary">{t('titleVariant')}</span>
		</h2>

		<div class="o-grid c-skills__grid">
			<SkillCategory title={t('categories.frontend')} skills={frontendSkills} />
			<SkillCategory title={t('categories.backend')} skills={backendSkills} />
			<SkillCategory title={t('categories.leadership')} skills={leadershipSkills} />
			<SkillCategory title={t('categories.infrastructure')} skills={infrastructureSkills} />
			<SkillCategory title={t('categories.tooling')} skills={toolingSkills} />
			<SkillCategory title={t('categories.ai')} skills={aiSkills} />
		</div>
	</div>
</section>

<style>
	.c-skills {
		background-color: var(--color-surface);
		padding-top: var(--spacing-xl);
		padding-bottom: var(--spacing-xl);
		border-top: 1px solid color-mix(in srgb, var(--color-outline-variant) 10%, transparent);
	}

	.c-skills__title {
		font-size: 3rem;
		font-weight: 700;
		letter-spacing: -0.05em;
		margin-bottom: var(--spacing-xl);
	}

	@media (min-width: 768px) {
		.c-skills__title {
			font-size: 3.75rem;
		}
	}

	.c-skills__grid {
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
	}

	@media (min-width: 768px) {
		.c-skills__grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
