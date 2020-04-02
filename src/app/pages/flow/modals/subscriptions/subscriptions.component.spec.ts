import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsModalComponent } from './subscriptions.component';

describe('SubscriptionsModalComponent', () => {
  let component: SubscriptionsModalComponent;
  let fixture: ComponentFixture<SubscriptionsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionsModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
