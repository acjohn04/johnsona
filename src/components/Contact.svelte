<script lang="ts">
	import { locale, useTranslations, type Locale } from '$lib/i18n';

	let currentLocale: Locale = $state('en');
	locale.subscribe((v) => (currentLocale = v));

	let tc = $derived(useTranslations(currentLocale, 'Contact'));
	let tf = $derived(useTranslations(currentLocale, 'Footer'));
</script>

<section id="contact" class="c-contact">
	<div class="o-container c-contact__inner">
		<h2 class="c-contact__title">
			{tc('title')}<span class="u-italic u-text-primary">{tc('titleVariant')}</span>.
		</h2>
		<p class="c-contact__subtitle">
			{tc('subtitle')}
		</p>

		<div class="c-contact__actions">
			<a href="mailto:acjohn04@gmail.com" class="c-contact__button">
				{tc('button')}
			</a>
			<div class="c-contact__socials">
				<a href={tf('linkedinUrl')} class="c-contact__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
					<span class="material-symbols-outlined">link</span>
				</a>
				<a href={tf('githubUrl')} class="c-contact__social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
					<span class="material-symbols-outlined">hub</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.c-contact {
		background-color: var(--color-surface-container-low);
		padding-top: var(--spacing-xl);
		padding-bottom: var(--spacing-xl);
	}

	.c-contact__inner {
		text-align: center;
	}

	.c-contact__title {
		font-size: 3.75rem;
		font-weight: 700;
		letter-spacing: -0.05em;
		margin-bottom: var(--spacing-md);
	}

	@media (min-width: 768px) {
		.c-contact__title {
			font-size: 8rem;
		}
	}

	.c-contact__subtitle {
		font-size: 1.25rem;
		color: var(--color-on-surface-variant);
		max-width: 42rem;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--spacing-lg);
		line-height: 1.625;
	}

	.c-contact__actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-md);
	}

	@media (min-width: 768px) {
		.c-contact__actions {
			flex-direction: row;
		}
	}

	.c-contact__button {
		background-color: var(--color-primary-container);
		color: var(--color-on-primary-container);
		padding: 24px 48px;
		font-family: var(--font-label);
		font-size: 1.125rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		border-radius: 16px;
		box-shadow: 0 20px 50px color-mix(in srgb, var(--color-primary) 20%, transparent);
		transition: all 0.3s ease;
	}

	.c-contact__button:hover {
		transform: scale(1.05);
	}

	.c-contact__button:active {
		transform: scale(0.95);
	}

	.c-contact__socials {
		display: flex;
		gap: var(--spacing-md);
	}

	.c-contact__social-link {
		width: 56px;
		height: 56px;
		border: 1px solid var(--color-outline-variant);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 16px;
		transition: all 0.3s ease;
		color: var(--color-on-surface);
	}

	.c-contact__social-link:hover {
		background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
		border-color: var(--color-primary);
		color: var(--color-primary);
	}
</style>
