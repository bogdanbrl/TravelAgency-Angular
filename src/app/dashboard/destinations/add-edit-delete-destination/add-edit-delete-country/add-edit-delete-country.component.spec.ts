import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteCountryComponent } from './add-edit-delete-country.component';

describe('AddEditDeleteCountryComponent', () => {
  let component: AddEditDeleteCountryComponent;
  let fixture: ComponentFixture<AddEditDeleteCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
