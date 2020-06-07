import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AddressesPageComponent } from './components/addresses-page/addresses-page.component';
import { AddressTableComponent } from './components/address-table/address-table.component';
import { addressesReducer } from './store/reducer/addresses.reducer';
import { AddressesService } from './addresses.service';
import { AddressEffects } from './store/effects/address.effects';
import { AddressListComponent } from './components/address-list/address-list.component';

@NgModule({
    imports: [
        StoreModule.forFeature('addresses', addressesReducer),
        EffectsModule.forFeature([AddressEffects]),
        MatTableModule,
        CommonModule,
        TranslateModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatListModule,
        MatCardModule,
    ],
    providers: [AddressesService],
    declarations: [AddressesPageComponent, AddressTableComponent, AddressListComponent],
})
export class AddressesModule {}
