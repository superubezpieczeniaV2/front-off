import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeOwnerTableComponent } from 'src/app/components/Tables/type-owner-table/type-owner-table.component';



@NgModule({
  declarations: [
    TypeOwnerTableComponent
  ],
  exports: [
    TypeOwnerTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TypeOwnerModule { }
