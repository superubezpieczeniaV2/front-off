import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOwnerTableComponent } from './type-owner-table.component';

describe('TypeOwnerTableComponent', () => {
  let component: TypeOwnerTableComponent;
  let fixture: ComponentFixture<TypeOwnerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOwnerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOwnerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
