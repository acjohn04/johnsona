<script lang="ts">
	import { locale, useTranslations, type Locale } from '$lib/i18n';

	let currentLocale: Locale = $state('en');
	$effect(() => {
		const unsub = locale.subscribe((v) => (currentLocale = v));
		return unsub;
	});

	let t = $derived(useTranslations(currentLocale, 'Hero'));
</script>

<section class="o-container o-grid o-grid--12 c-hero">
	<div class="c-hero__content">
		<h1 class="c-hero__title">
			{t('titlePrefix')} <span class="u-italic u-text-primary">{t('titleVariant')} </span> {t('titleSuffix')}
		</h1>
		<p class="c-hero__subtitle">
			{t('subtitle')}
		</p>

		<div class="c-hero__actions">
			<a href="#skills" class="c-hero__link">
				{t('expertise')}
			</a>
			<div class="c-hero__badge">
				<span aria-hidden="true" class="c-hero__terminal-icon">{'>_'}</span>
				<span>{t('location')}</span>
			</div>
		</div>
	</div>

	<div class="c-hero__visual">
		<div class="c-hero__image-wrapper">
			<img
				src="/adam.jpg"
				alt="Adam Johnson Professional Portrait"
				class="c-hero__image"
				loading="eager"
				fetchpriority="high"
				width="1067"
				height="1600"
			/>
		</div>
		<div class="c-hero__glow" aria-hidden="true"></div>
	</div>
</section>

<style>
	.c-hero {
		padding-top: calc(var(--spacing-xl) + var(--spacing-lg));
		padding-bottom: var(--spacing-xl);
		align-items: center;
	}

	.c-hero__content {
		grid-column: span 12;
	}

	@media (min-width: 768px) {
		.c-hero__content {
			grid-column: span 8;
		}
	}

	.c-hero__title {
		font-size: 3.75rem;
		line-height: 1;
		margin-bottom: var(--spacing-md);
	}

	@media (min-width: 768px) {
		.c-hero__title {
			font-size: 6rem;
		}
	}

	.c-hero__subtitle {
		font-size: 1.25rem;
		color: var(--color-on-surface-variant);
		max-width: 42rem;
		line-height: 1.625;
	}

	@media (min-width: 768px) {
		.c-hero__subtitle {
			font-size: 1.5rem;
		}
	}

	.c-hero__actions {
		margin-top: var(--spacing-lg);
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
	}

	.c-hero__link {
		font-family: var(--font-label);
		font-size: 0.875rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		border-bottom: 2px solid var(--color-primary);
		padding-bottom: 4px;
		transition: color 0.3s ease;
	}

	.c-hero__link:hover {
		color: var(--color-primary);
	}

	.c-hero__badge {
		display: flex;
		align-items: center;
		gap: var(--spacing-unit);
		color: var(--color-on-surface-variant);
		opacity: 0.6;
		font-family: var(--font-label);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.c-hero__terminal-icon {
		font-weight: bold;
		color: var(--color-primary);
	}

	.c-hero__visual {
		grid-column: span 12;
		position: relative;
		margin-top: var(--spacing-lg);
	}

	@media (min-width: 768px) {
		.c-hero__visual {
			grid-column: span 4;
			margin-top: 0;
		}
	}

	.c-hero__image-wrapper {
		aspect-ratio: 4 / 5;
		background-color: var(--color-surface-container-low);
		overflow: hidden;
		border-radius: 16px;
		filter: grayscale(100%);
		transition: filter 0.7s ease;
	}

	.c-hero__image-wrapper:hover {
		filter: grayscale(0%);
	}

	.c-hero__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.c-hero__glow {
		position: absolute;
		bottom: -16px;
		right: -16px;
		width: 100%;
		aspect-ratio: 4 / 5;
		background-color: color-mix(in srgb, var(--color-primary-container) 20%, transparent);
		backdrop-filter: blur(40px);
		z-index: -1;
		border-radius: 16px;
	}
</style>
