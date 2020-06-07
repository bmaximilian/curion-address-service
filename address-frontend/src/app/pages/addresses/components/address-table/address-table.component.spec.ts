import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { addressesReducer } from '../../store/reducer/addresses.reducer';
import { AddressTableComponent } from './address-table.component';

describe('AddressTableComponent', () => {
    let component: AddressTableComponent;
    let fixture: ComponentFixture<AddressTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ addresses: addressesReducer }),
                MatTableModule,
                CommonModule,
                TranslateModule.forRoot(),
            ],
            declarations: [AddressTableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddressTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
