import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyModalComponent } from './pharmacy.component';

describe('PharmacyModalComponent', () => {
  let component: PharmacyModalComponent;
  let fixture: ComponentFixture<PharmacyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
