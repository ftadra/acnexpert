import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccutaneComponent } from './accutane.component';

describe('AccutaneComponent', () => {
  let component: AccutaneComponent;
  let fixture: ComponentFixture<AccutaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccutaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccutaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
