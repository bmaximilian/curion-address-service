import { Component } from '@angular/core';
import { MenuItem } from './ui-components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'address-frontend';

    public menuItems: MenuItem[] = [
        { href: '/addresses', isRouterLink: true, text: 'Addresses' },
        { href: '/absence', isRouterLink: true, text: 'Absence' },
        { href: '/occasions', isRouterLink: true, text: 'Occasions' },
    ];
}
