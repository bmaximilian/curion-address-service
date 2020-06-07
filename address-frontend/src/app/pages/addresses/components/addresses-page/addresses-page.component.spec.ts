import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { addressesReducer } from '../../store/reducer/addresses.reducer';
import { AddressTableComponent } from '../address-table/address-table.component';
import { AddressesPageComponent } from './addresses-page.component';

describe('AddressPageComponent', () => {
    let component: AddressesPageComponent;
    let fixture: ComponentFixture<AddressesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({ addresses: addressesReducer }), TranslateModule.forRoot(), MatTableModule],
            declarations: [AddressesPageComponent, AddressTableComponent],
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
