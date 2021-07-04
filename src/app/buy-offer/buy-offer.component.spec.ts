import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOfferComponent } from './buy-offer.component';

describe('BuyOfferComponent', () => {
  let component: BuyOfferComponent;
  let fixture: ComponentFixture<BuyOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
