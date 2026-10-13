export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;
export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: LanguageCode = 'en';
