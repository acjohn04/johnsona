<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, applyTheme } from '$lib/theme';
	import { locale, type Locale } from '$lib/i18n';
	import '../styles/index.css';

	let { children } = $props();

	let currentLocale: Locale = $state('en');
	let currentTheme = $state('system' as import('$lib/theme').Theme);

	// Subscribe to stores
	locale.subscribe((v) => (currentLocale = v));
	theme.subscribe((v) => (currentTheme = v));

	onMount(() => {
		// Apply theme on mount
		applyTheme(currentTheme);

		// Listen for system theme changes
		const mql = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = () => {
			if (currentTheme === 'system') {
				applyTheme('system');
			}
		};
		mql.addEventListener('change', handler);
		return () => mql.removeEventListener('change', handler);
	});
</script>

<svelte:head>
	<title>Adam Johnson | Frontend Engineering Manager</title>
	<meta name="description" content="I build high-performing engineering teams and scale robust frontend architectures." />
</svelte:head>

{@render children()}
