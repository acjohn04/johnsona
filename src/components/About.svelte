<script lang="ts">
	import { locale, useTranslations, type Locale } from '$lib/i18n';
	import AboutHighlight from './AboutHighlight.svelte';

	let currentLocale: Locale = $state('en');
	$effect(() => {
		const unsub = locale.subscribe((v) => (currentLocale = v));
		return unsub;
	});

	let t = $derived(useTranslations(currentLocale, 'About'));
</script>

<section id="about" class="c-about">
	<div class="o-container o-grid o-grid--12 c-about__inner">
		<div class="c-about__header">
			<h2 class="c-about__title">{t('title')}</h2>
		</div>

		<div class="c-about__content">
			<p class="c-about__narrative">
				{t('narrative')}
			</p>

			<div class="c-about__highlights">
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

<style>
	.c-about {
		background-color: var(--color-surface-container-low);
		padding-top: var(--spacing-xl);
		padding-bottom: var(--spacing-xl);
	}

	.c-about__inner {
		align-items: flex-start;
	}

	.c-about__header {
		grid-column: span 12;
	}

	@media (min-width: 768px) {
		.c-about__header {
			grid-column: span 4;
		}
	}

	.c-about__title {
		font-size: 2.25rem;
		font-weight: 700;
		letter-spacing: -0.025em;
		position: sticky;
		top: 10rem;
	}

	.c-about__content {
		grid-column: span 12;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	@media (min-width: 768px) {
		.c-about__content {
			grid-column: 6 / -1;
		}
	}

	.c-about__narrative {
		font-size: 1.5rem;
		line-height: 1.625;
		color: var(--color-on-surface);
		margin: 0;
	}

	.c-about__highlights {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		padding-top: var(--spacing-lg);
	}

	@media (min-width: 768px) {
		.c-about__highlights {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
