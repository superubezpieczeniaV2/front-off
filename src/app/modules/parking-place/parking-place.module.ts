import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingPlaceComponent } from 'src/app/components/Tables/parking-place/parking-place.component';



@NgModule({
  declarations: [
    ParkingPlaceComponent
  ],
  exports: [
    ParkingPlaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParkingPlaceModule { }
