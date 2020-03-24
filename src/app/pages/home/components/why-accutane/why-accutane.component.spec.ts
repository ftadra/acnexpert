import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAccutaneComponent } from './why-accutane.component';

describe('WhyAccutaneComponent', () => {
  let component: WhyAccutaneComponent;
  let fixture: ComponentFixture<WhyAccutaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAccutaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAccutaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
