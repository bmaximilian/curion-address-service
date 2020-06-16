import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { addressesReducer } from '../../store/reducer/addresses.reducer';
import { AddressTableComponent } from '../address-table/address-table.component';
import { AddressListComponent } from '../address-list/address-list.component';
import { AddressesPageComponent } from './addresses-page.component';

describe('AddressPageComponent', () => {
    let component: AddressesPageComponent;
    let fixture: ComponentFixture<AddressesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ addresses: addressesReducer }),
                TranslateModule.forRoot(),
                MatTableModule,
                MatCardModule,
                MatListModule,
                MatDialogModule,
                MatToolbarModule,
                MatIconModule,
            ],
            declarations: [AddressesPageComponent, AddressTableComponent, AddressListComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddressesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
