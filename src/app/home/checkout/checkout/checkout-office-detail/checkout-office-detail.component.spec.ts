import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOfficeDetailComponent } from './checkout-office-detail.component';

describe('CheckoutOfficeDetailComponent', () => {
  let component: CheckoutOfficeDetailComponent;
  let fixture: ComponentFixture<CheckoutOfficeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutOfficeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutOfficeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
