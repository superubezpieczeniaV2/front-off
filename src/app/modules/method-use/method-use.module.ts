import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodUseComponent } from 'src/app/components/Tables/method-use/method-use.component';



@NgModule({
  declarations: [
    MethodUseComponent
  ],
  exports: [
    MethodUseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MethodUseModule { }
