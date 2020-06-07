import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressesPageComponent } from './addresses-page.component';

describe('AbsencePageComponent', () => {
    let component: AddressesPageComponent;
    let fixture: ComponentFixture<AddressesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
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
