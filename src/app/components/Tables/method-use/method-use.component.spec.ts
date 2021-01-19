import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodUseComponent } from './method-use.component';

describe('MethodUseComponent', () => {
  let component: MethodUseComponent;
  let fixture: ComponentFixture<MethodUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
