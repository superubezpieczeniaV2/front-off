import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginePowerTableComponent } from './engine-power-table.component';

describe('EnginePowerTableComponent', () => {
  let component: EnginePowerTableComponent;
  let fixture: ComponentFixture<EnginePowerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginePowerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginePowerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
