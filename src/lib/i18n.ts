/**
 * i18n - Lightweight translation system using Svelte 5 runes.
 *
 * Uses a simple writable store for the current locale and dynamic JSON imports
 * for translation messages. No external i18n library needed.
 */

import { writable, get } from 'svelte/store';
import enMessages from '../../messages/en.json';
import esMessages from '../../messages/es.json';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Current locale store */
export const locale = writable<Locale>(defaultLocale);

const messageMap: Record<Locale, Record<string, unknown>> = {
	en: enMessages,
	es: esMessages
};

/**
 * Get a translated string by dotted key path for the given locale.
 * Example: t('en', 'Hero.titlePrefix') => "Engineering "
 */
function resolve(obj: unknown, path: string): string {
	const parts = path.split('.');
	let current: unknown = obj;
	for (const part of parts) {
		if (current == null || typeof current !== 'object') return path;
		current = (current as Record<string, unknown>)[part];
	}
	return typeof current === 'string' ? current : path;
}

/**
 * Create a translation function scoped to a namespace.
 * Usage: const t = useTranslations('Hero'); t('titlePrefix')
 */
export function useTranslations(currentLocale: Locale, namespace?: string) {
	return (key: string): string => {
		const fullKey = namespace ? `${namespace}.${key}` : key;
		return resolve(messageMap[currentLocale], fullKey);
	};
}

/**
 * Get all messages for a locale (useful for Storybook).
 */
export function getMessages(loc: Locale): Record<string, unknown> {
	return messageMap[loc];
}
