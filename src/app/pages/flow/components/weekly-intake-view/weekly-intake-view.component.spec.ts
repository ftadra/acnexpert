import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyIntakeViewComponent } from './weekly-intake-view.component';

describe('WeeklyIntakeViewComponent', () => {
  let component: WeeklyIntakeViewComponent;
  let fixture: ComponentFixture<WeeklyIntakeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyIntakeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyIntakeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
