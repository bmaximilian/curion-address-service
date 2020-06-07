import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AddressesPageComponent } from './addresses-page/addresses-page.component';
import { addressesReducer } from './store/reducer/addresses.reducer';
import { AddressesService } from './addresses.service';
import { AddressEffects } from './store/effects/address.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('addresses', addressesReducer),
        EffectsModule.forFeature([AddressEffects]),
        MatTableModule,
        CommonModule,
        TranslateModule,
    ],
    providers: [AddressesService],
    declarations: [AddressesPageComponent],
})
export class AddressesModule {}
