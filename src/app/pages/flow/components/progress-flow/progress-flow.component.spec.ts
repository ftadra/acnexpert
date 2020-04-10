import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressFlowComponent } from './progress-flow.component';

describe('ProgressFlowComponent', () => {
  let component: ProgressFlowComponent;
  let fixture: ComponentFixture<ProgressFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
