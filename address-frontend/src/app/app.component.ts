import { Component, Inject, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import defaultLanguage from '../assets/i18n/de-DE.json';
import { MenuItem } from './ui-components/nav-bar/nav-bar.component';

registerLocaleData(localeDe);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'general.title';

    public menuItems: MenuItem[] = [
        { href: '/addresses', isRouterLink: true, text: 'general.navbar.links.addresses' },
        { href: '/absence', isRouterLink: true, text: 'general.navbar.links.absence' },
        { href: '/occasions', isRouterLink: true, text: 'general.navbar.links.occasions' },
    ];

    /**
     * Constructor of AppComponent
     *
     * @param translate - Translate service instance
     * @param locale - Current locale
     */
    constructor(private translate: TranslateService, @Inject(LOCALE_ID) locale: string) {
        translate.setTranslation('de-DE', defaultLanguage);
        translate.setDefaultLang(locale);
    }
}
