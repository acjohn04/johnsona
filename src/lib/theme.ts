/**
 * Theme store - manages dark/light/system theme preference.
 * Replaces next-themes with a native Svelte 5 approach.
 */

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';

function getInitialTheme(): Theme {
	if (!browser) return 'system';
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') return stored;
	return 'system';
}

function getResolvedTheme(theme: Theme): 'light' | 'dark' {
	if (theme !== 'system') return theme;
	if (!browser) return 'dark';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const theme = writable<Theme>(getInitialTheme());

/** Apply theme to <html> element */
export function applyTheme(t: Theme): void {
	if (!browser) return;
	const resolved = getResolvedTheme(t);
	document.documentElement.setAttribute('data-theme', resolved);
	localStorage.setItem('theme', t);
}

/** Toggle between light and dark */
export function toggleTheme(): void {
	theme.update((current) => {
		const resolved = getResolvedTheme(current);
		const next: Theme = resolved === 'dark' ? 'light' : 'dark';
		applyTheme(next);
		return next;
	});
}

/** Get the current resolved theme (light or dark) */
export function getResolved(t: Theme): 'light' | 'dark' {
	return getResolvedTheme(t);
}
