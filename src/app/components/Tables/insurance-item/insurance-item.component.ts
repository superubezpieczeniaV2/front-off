import { Component, OnInit } from '@angular/core';
import { TypeInsuranceService } from 'src/app/services/type-insurance.service';

@Component({
  selector: 'app-insurance-item',
  templateUrl: './insurance-item.component.html',
  styleUrls: ['./insurance-item.component.css']
})
export class InsuranceItemComponent implements OnInit {
  typeInsurances$

  constructor(private typeInsurance: TypeInsuranceService) { }

  ngOnInit() {
    this.typeInsurances$ = this.typeInsurance.getAll()
  }

  onDelete(id) {
    this.typeInsurance.removeTypeInsurance(id)
  }

}
