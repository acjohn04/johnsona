<script lang="ts">
	import { locale, type Locale } from '$lib/i18n';

	let currentLocale: Locale = $state('en');
	locale.subscribe((v) => (currentLocale = v));

	function toggleLocale() {
		const nextLocale: Locale = currentLocale === 'en' ? 'es' : 'en';
		locale.set(nextLocale);
	}
</script>

<button
	class="c-locale-switcher"
	onclick={toggleLocale}
	aria-label="Toggle Language"
>
	{currentLocale === 'en' ? 'ES' : 'EN'}
</button>

<style>
	.c-locale-switcher {
		background: transparent;
		border: 1px solid var(--color-outline-variant);
		color: var(--color-on-surface);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 700;
		font-size: 0.75rem;
	}

	.c-locale-switcher:hover {
		background: var(--color-surface-container);
		border-color: var(--color-primary);
	}
</style>
