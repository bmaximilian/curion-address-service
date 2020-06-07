import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export interface MenuItem {
    href: string;
    isRouterLink: boolean;
    text: string;
}

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    public isCollapsed = true;

    public isDrawerVisible = true;

    @Input()
    public drawerTitle = '';

    @Input()
    public menuItems: MenuItem[] = [];

    /**
     * Constructor of navbar component
     *
     * @param breakpointObserver - Observes window breakpoints
     */
    constructor(private breakpointObserver: BreakpointObserver) {}

    /**
     *
     */
    public ngOnInit(): void {
        this.breakpointObserver
            .observe(Breakpoints.Handset)
            .pipe(map((result) => result.matches))
            .subscribe((isHandset) => {
                if (this.isDrawerVisible && !isHandset) {
                    this.isCollapsed = true;
                }

                this.isDrawerVisible = isHandset;
            });
    }
}
