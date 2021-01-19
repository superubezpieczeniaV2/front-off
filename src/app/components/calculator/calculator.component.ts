import { Component, OnInit } from '@angular/core';
import { EnginePowerService } from 'src/app/services/engine-power.service';
import { MarksService } from 'src/app/services/marks.service';
import { MethodUseService } from 'src/app/services/method-use.service';
import { ModelsService } from 'src/app/services/models.service';
import { ParkingPlaceService } from 'src/app/services/parking-place.service';
import { TypeInsuranceService } from 'src/app/services/type-insurance.service';
import { TypeOwnerService } from 'src/app/services/type-owner.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  models$
  typesInsurance$
  typesOwner$
  methodsUse$
  parkingPlaces$
  enginePowers$
  marks$

  constructor(
    private modelsService: ModelsService,
    private typeInsuranceService: TypeInsuranceService,
    private typeOwnerService: TypeOwnerService,
    private methodUseService: MethodUseService,
    private parkingPlaceService: ParkingPlaceService,
    private enginePowerService: EnginePowerService,
    private markService: MarksService
  ) { }

  ngOnInit() {
    this.models$ = this.modelsService.getAll()
    this.typesInsurance$ = this.typeInsuranceService.getAll()
    this.typesOwner$ = this.typeOwnerService.getAll()
    this.methodsUse$ = this.methodUseService.getAll()
    this.parkingPlaces$ = this.parkingPlaceService.getAll()
    this.enginePowers$ = this.enginePowerService.getAll()
    this.marks$ = this.markService.getAll()
  }

}
