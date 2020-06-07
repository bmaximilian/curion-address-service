import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from '../app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        AppRoutingModule,
    ],
    declarations: [NavBarComponent],
    exports: [NavBarComponent],
})
export class AppUiModule {}
