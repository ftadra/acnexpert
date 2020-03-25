import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreFooterComponent } from './learn-more-footer.component';

describe('LearnMoreFooterComponent', () => {
  let component: LearnMoreFooterComponent;
  let fixture: ComponentFixture<LearnMoreFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
