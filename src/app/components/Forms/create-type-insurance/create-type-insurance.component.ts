import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TypeInsuranceService } from 'src/app/services/type-insurance.service';
import { environment } from 'src/environments/environment';
import { TypeInsurance } from '../../../data/models/TypeInsurance'
import { first, map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-create-type-insurance',
  templateUrl: './create-type-insurance.component.html',
  styleUrls: ['./create-type-insurance.component.css']
})
export class CreateTypeInsuranceComponent implements OnInit {
  createType
  
  constructor(
    private typeInsuranceService: TypeInsuranceService
    // private http: HttpClient
  ) {}

  ngOnInit() {}

  submitted = false

  model = new TypeInsurance('', null)

  onSubmit()  { 
    this.submitted = true, 
    console.log(this.model) 
    this.typeInsuranceService.createTypeInsurance(this.model.Type, this.model.Price)
  }

  get diagnostic () { return this.model }

}
