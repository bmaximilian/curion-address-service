import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbsencePageComponent } from './absence-page.component';

describe('AbsencePageComponent', () => {
    let component: AbsencePageComponent;
    let fixture: ComponentFixture<AbsencePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AbsencePageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AbsencePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
