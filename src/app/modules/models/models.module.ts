import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsTableComponent } from 'src/app/components/models-table/models-table.component';

@NgModule({
  declarations: [
    ModelsTableComponent
  ],
  exports: [
    ModelsTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModelsModule { }
