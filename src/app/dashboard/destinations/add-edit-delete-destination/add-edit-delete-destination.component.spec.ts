import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteDestinationComponent } from './add-edit-delete-destination.component';

describe('AddEditDeleteDestinationComponent', () => {
  let component: AddEditDeleteDestinationComponent;
  let fixture: ComponentFixture<AddEditDeleteDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
