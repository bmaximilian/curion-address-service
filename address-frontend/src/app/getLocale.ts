/**
 * Return the locale of a browser
 *
 * @returns - The locale string
 */
export function getLocale(): string {
    return navigator.languages && navigator.languages.length > 0 ? navigator.languages[0] : navigator.language;
}
