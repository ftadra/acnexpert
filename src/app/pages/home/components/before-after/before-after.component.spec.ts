import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeforeAfterComponent } from './before-after.component';

describe('HomeBeforeAfterComponent', () => {
  let component: HomeBeforeAfterComponent;
  let fixture: ComponentFixture<HomeBeforeAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBeforeAfterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeforeAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
