import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginePowerComponent } from './engine-power.component';

describe('EnginePowerComponent', () => {
  let component: EnginePowerComponent;
  let fixture: ComponentFixture<EnginePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginePowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
