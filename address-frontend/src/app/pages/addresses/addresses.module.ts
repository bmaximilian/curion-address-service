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
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressesPageComponent } from './components/addresses-page/addresses-page.component';
import { AddressTableComponent } from './components/address-table/address-table.component';
import { addressesReducer } from './store/reducer/addresses.reducer';
import { AddressesService } from './addresses.service';
import { AddressEffects } from './store/effects/address.effects';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressFormDialogComponent } from './components/address-form-dialog/address-form-dialog.component';

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
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    providers: [AddressesService],
    declarations: [
        AddressesPageComponent,
        AddressTableComponent,
        AddressListComponent,
        AddressFormDialogComponent,
        AddressFormDialogComponent,
    ],
})
export class AddressesModule {}
