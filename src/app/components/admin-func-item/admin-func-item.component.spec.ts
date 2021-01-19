import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFuncItemComponent } from './admin-func-item.component';

describe('AdminFuncItemComponent', () => {
  let component: AdminFuncItemComponent;
  let fixture: ComponentFixture<AdminFuncItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFuncItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFuncItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
