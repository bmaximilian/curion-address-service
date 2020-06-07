import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from '../assets/i18n/de_DE.json';
import { MenuItem } from './ui-components/nav-bar/nav-bar.component';

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
     */
    constructor(private translate: TranslateService) {
        translate.setTranslation('de_DE', defaultLanguage);
        translate.setDefaultLang('de_DE');
    }
}
