import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnginePowerComponent } from 'src/app/pages/AdminPages/engine-power/engine-power.component';
import { EnginePowerTableComponent } from 'src/app/components/Tables/engine-power-table/engine-power-table.component';

@NgModule({
  declarations: [
    EnginePowerComponent,
    EnginePowerTableComponent
  ],
  exports: [
    EnginePowerComponent,
    EnginePowerTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EnginePowerModule { }
