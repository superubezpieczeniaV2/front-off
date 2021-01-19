import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeInsuranceComponent } from './create-type-insurance.component';

describe('CreateTypeInsuranceComponent', () => {
  let component: CreateTypeInsuranceComponent;
  let fixture: ComponentFixture<CreateTypeInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
