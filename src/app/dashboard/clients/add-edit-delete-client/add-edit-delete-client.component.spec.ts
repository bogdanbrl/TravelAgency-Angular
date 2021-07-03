import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteClientComponent } from './add-edit-delete-client.component';

describe('AddEditDeleteClientComponent', () => {
  let component: AddEditDeleteClientComponent;
  let fixture: ComponentFixture<AddEditDeleteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
