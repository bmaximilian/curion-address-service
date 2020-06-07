import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OccasionsPageComponent } from './occasions-page.component';

describe('OccasionsPageComponent', () => {
    let component: OccasionsPageComponent;
    let fixture: ComponentFixture<OccasionsPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OccasionsPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OccasionsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
