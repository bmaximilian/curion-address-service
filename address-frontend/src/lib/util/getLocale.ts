/**
 * Return the locale of a browser
 *
 * @returns - The locale string
 */
export function getLocale(): string {
    if (navigator?.languages?.length > 0) {
        return navigator.languages[0];
    }

    if (navigator?.language) return navigator.language;

    return 'de-DE';
}
