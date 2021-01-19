import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTablesComponent } from './marks-tables.component';

describe('MarksTablesComponent', () => {
  let component: MarksTablesComponent;
  let fixture: ComponentFixture<MarksTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
