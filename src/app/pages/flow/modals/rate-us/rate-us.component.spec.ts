import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateUsModalComponent } from './rate-us.component';

describe('RateUsModalComponent', () => {
  let component: RateUsModalComponent;
  let fixture: ComponentFixture<RateUsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RateUsModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateUsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
