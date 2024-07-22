import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHijoComponent } from './pricing-hijo.component';

describe('PricingHijoComponent', () => {
  let component: PricingHijoComponent;
  let fixture: ComponentFixture<PricingHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
