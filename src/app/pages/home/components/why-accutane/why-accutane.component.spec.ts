import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyAccutaneComponent } from './why-accutane.component';

describe('HomeWhyAccutaneComponent', () => {
  let component: HomeWhyAccutaneComponent;
  let fixture: ComponentFixture<HomeWhyAccutaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeWhyAccutaneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyAccutaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
