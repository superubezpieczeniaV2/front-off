import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeInsuranceComponent } from './add-type-insurance.component';

describe('AddTypeInsuranceComponent', () => {
  let component: AddTypeInsuranceComponent;
  let fixture: ComponentFixture<AddTypeInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
