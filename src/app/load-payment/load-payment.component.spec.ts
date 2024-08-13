import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPaymentComponent } from './load-payment.component';

describe('LoadPaymentComponent', () => {
  let component: LoadPaymentComponent;
  let fixture: ComponentFixture<LoadPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
