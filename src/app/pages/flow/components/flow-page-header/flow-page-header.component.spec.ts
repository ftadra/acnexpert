import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowPageHeaderComponent } from './flow-page-header.component';

describe('FlowPageHeaderComponent', () => {
  let component: FlowPageHeaderComponent;
  let fixture: ComponentFixture<FlowPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
