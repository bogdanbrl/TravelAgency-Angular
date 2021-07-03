import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDestinationComponent } from './preview-destination.component';

describe('PreviewDestinationComponent', () => {
  let component: PreviewDestinationComponent;
  let fixture: ComponentFixture<PreviewDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
