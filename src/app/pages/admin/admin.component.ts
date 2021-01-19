import { Component, OnInit } from '@angular/core';
import { ADMINFUNCTIONALITIES } from 'src/app/data/mocks/AdminFuncMocks';
import { TypeInsurance } from 'src/app/data/models/TypeInsurance';
import { TypeInsuranceService } from 'src/app/services/type-insurance.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminFuncs$ = ADMINFUNCTIONALITIES

  typeInsurances: TypeInsurance[]

  constructor(
    private typeInsuranceService: TypeInsuranceService
  ) { }

  ngOnInit(): void {
  }
}
