import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpModalComponent } from './follow-up.component';

describe('FollowUpModalComponent', () => {
  let component: FollowUpModalComponent;
  let fixture: ComponentFixture<FollowUpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FollowUpModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
