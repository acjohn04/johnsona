<script lang="ts">
	import { locale, useTranslations, type Locale } from '$lib/i18n';

	let currentLocale: Locale = $state('en');
	$effect(() => {
		const unsub = locale.subscribe((v) => (currentLocale = v));
		return unsub;
	});

	let t = $derived(useTranslations(currentLocale, 'Footer'));

	const year = new Date().getFullYear();
</script>

<footer class="c-footer">
	<div class="o-container c-footer__inner">
		<div class="c-footer__brand">
			<span class="c-footer__name">Adam Johnson</span>
			<span class="c-footer__copyright">
				&copy; {year} Adam Johnson. {t('builtWith')}
			</span>
		</div>

		<div class="c-footer__links">
			<a href={t('githubUrl')} class="c-footer__link" target="_blank" rel="noopener noreferrer">
				{t('github')}
			</a>
			<a href={t('linkedinUrl')} class="c-footer__link" target="_blank" rel="noopener noreferrer">
				{t('linkedin')}
			</a>
		</div>
	</div>
</footer>

<style>
	.c-footer {
		background-color: var(--color-background);
		padding-top: var(--spacing-lg);
		padding-bottom: var(--spacing-lg);
	}

	.c-footer__inner {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid color-mix(in srgb, var(--color-outline-variant) 20%, transparent);
		padding-top: var(--spacing-lg);
	}

	@media (min-width: 768px) {
		.c-footer__inner {
			flex-direction: row;
			align-items: flex-start;
		}
	}

	.c-footer__brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: var(--spacing-md);
	}

	@media (min-width: 768px) {
		.c-footer__brand {
			align-items: flex-start;
			margin-bottom: 0;
		}
	}

	.c-footer__name {
		font-size: 1.125rem;
		font-weight: 900;
		color: var(--color-on-background);
		margin-bottom: var(--spacing-unit);
	}

	.c-footer__copyright {
		font-family: var(--font-body);
		font-size: 0.875rem;
		letter-spacing: 0.025em;
		color: var(--color-on-surface-variant);
	}

	.c-footer__links {
		display: flex;
		gap: var(--spacing-md);
		font-family: var(--font-body);
		font-size: 0.875rem;
		letter-spacing: 0.025em;
	}

	.c-footer__link {
		color: var(--color-on-surface-variant);
		text-decoration-line: underline;
		text-underline-offset: 8px;
		text-decoration-thickness: 2px;
		transition: all 0.5s ease-in-out;
	}

	.c-footer__link:hover {
		color: var(--color-primary);
	}
</style>
