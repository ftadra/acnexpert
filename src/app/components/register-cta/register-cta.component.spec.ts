import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCtaComponent } from './register-cta.component';

describe('RegisterCtaComponent', () => {
  let component: RegisterCtaComponent;
  let fixture: ComponentFixture<RegisterCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCtaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
