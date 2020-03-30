import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowItWorksComponent } from './how-it-works.component';

describe('HomeHowItWorksComponent', () => {
  let component: HomeHowItWorksComponent;
  let fixture: ComponentFixture<HomeHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHowItWorksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
