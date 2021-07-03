import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteOfferComponent } from './add-edit-delete-offer.component';

describe('AddEditDeleteOfferComponent', () => {
  let component: AddEditDeleteOfferComponent;
  let fixture: ComponentFixture<AddEditDeleteOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
