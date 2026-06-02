<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, useTranslations, type Locale } from '$lib/i18n';
	import ThemeToggle from './ThemeToggle.svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';

	let currentLocale: Locale = $state('en');
	locale.subscribe((v) => (currentLocale = v));

	let t = $derived(useTranslations(currentLocale, 'Navigation'));
	
	let activeSection = $state('');

	onMount(() => {
		// Select all sections on the page with an ID
		const sections = document.querySelectorAll('section[id]');
		
		// Create an intersection observer and update state based on visibility
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{
				// Triggers the active state when a section's middle crosses the viewport's middle
				rootMargin: '-50% 0px -50% 0px',
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	});
</script>

<nav class="c-top-app-bar">
	<div class="o-container c-top-app-bar__inner">
		<a href="/" class="c-top-app-bar__logo">
			Adam Johnson
		</a>

		<div class="c-top-app-bar__desktop-nav">
			<a 
				href="#about" 
				class="c-top-app-bar__nav-link"
				class:c-top-app-bar__nav-link--active={activeSection === 'about'}
			>
				{t('about')}
			</a>
			<a 
				href="#skills" 
				class="c-top-app-bar__nav-link"
				class:c-top-app-bar__nav-link--active={activeSection === 'skills'}
			>
				{t('skills')}
			</a>
			<a 
				href="#projects" 
				class="c-top-app-bar__nav-link"
				class:c-top-app-bar__nav-link--active={activeSection === 'projects'}
			>
				{t('projects')}
			</a>
			<a 
				href="#contact" 
				class="c-top-app-bar__nav-link"
				class:c-top-app-bar__nav-link--active={activeSection === 'contact'}
			>
				{t('contact')}
			</a>
		</div>

		<div class="c-top-app-bar__actions">
			<LocaleSwitcher />
			<ThemeToggle />
			<a href="#contact" class="c-button-primary">
				{t('hireMe')}
			</a>
		</div>
	</div>
</nav>

<style>
	.c-top-app-bar {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 50;
		background-color: color-mix(in srgb, var(--color-surface) 70%, transparent);
		backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--color-surface-container);
	}

	.c-top-app-bar__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--spacing-sm);
		padding-bottom: var(--spacing-sm);
	}

	.c-top-app-bar__logo {
		font-family: var(--font-headline);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-on-background);
		letter-spacing: -0.05em;
	}

	.c-top-app-bar__desktop-nav {
		display: none;
	}

	@media (min-width: 768px) {
		.c-top-app-bar__desktop-nav {
			display: flex;
			align-items: center;
			gap: var(--spacing-md);
		}
	}

	.c-top-app-bar__nav-link {
		color: var(--color-on-surface-variant);
		font-weight: 500;
		transition: color 0.3s ease;
	}

	.c-top-app-bar__nav-link:hover {
		color: var(--color-primary);
	}

	.c-top-app-bar__nav-link--active {
		color: var(--color-primary);
		font-weight: 700;
		border-bottom: 2px solid var(--color-primary);
		padding-bottom: 4px;
	}

	.c-top-app-bar__actions {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	/* Button style could be an object, but scoping it here for modularity per BEM module rules */
	.c-button-primary {
		background-color: var(--color-primary-container);
		color: var(--color-on-primary-container);
		padding: 10px 24px;
		border-radius: 12px;
		font-family: var(--font-label);
		font-size: 0.875rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		box-shadow: 0 0 20px color-mix(in srgb, var(--color-primary) 20%, transparent);
		transition: all 0.2s ease;
		cursor: pointer;
		white-space: nowrap;
	}

	.c-button-primary:hover {
		opacity: 0.9;
		transform: scale(1.02);
	}

	.c-button-primary:active {
		transform: scale(0.98);
	}
</style>
