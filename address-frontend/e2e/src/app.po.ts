import { browser, by, element } from 'protractor';

export class AppPage {
    /**
     * Navigates to the base url
     *
     * @returns A promise that resolves when the app has navigated
     */
    public navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    /**
     * Reads the title text
     *
     * @returns A promise that resolves with the title text
     */
    public getTitleText(): Promise<string> {
        return element(by.css('app-root .content span')).getText() as Promise<string>;
    }
}
