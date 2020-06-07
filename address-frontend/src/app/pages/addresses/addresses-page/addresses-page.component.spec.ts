import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { addressesReducer } from '../store/reducer/addresses.reducer';
import { AddressesPageComponent } from './addresses-page.component';

describe('AddressPageComponent', () => {
    let component: AddressesPageComponent;
    let fixture: ComponentFixture<AddressesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({ addresses: addressesReducer })],
            declarations: [AddressesPageComponent],
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
