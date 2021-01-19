import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesInsuranceComponent } from './types-insurance.component';

describe('TypesInsuranceComponent', () => {
  let component: TypesInsuranceComponent;
  let fixture: ComponentFixture<TypesInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
