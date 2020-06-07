import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        RouterModule,
        TranslateModule,
    ],
    declarations: [NavBarComponent],
    exports: [NavBarComponent],
})
export class AppUiModule {}
