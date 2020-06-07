import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

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
    @Input()
    public drawerTitle = '';

    @Input()
    public menuItems: MenuItem[] = [];

    @ViewChild('drawer') public drawer: MatSidenav;

    public isSmallDevice = false;

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
            .subscribe((isSmallDevice) => {
                if (this.isSmallDevice && !isSmallDevice) {
                    this.drawer.close();
                }

                this.isSmallDevice = isSmallDevice;
            });
    }
}
