import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTypeInsuranceComponent } from 'src/app/components/Forms/create-type-insurance/create-type-insurance.component';
import { AddTypeInsuranceComponent } from 'src/app/components/Modals/add-type-insurance/add-type-insurance.component';
import { InsuranceItemComponent } from 'src/app/components/Tables/insurance-item/insurance-item.component';
import { TypesInsuranceComponent } from 'src/app/pages/AdminPages/types-insurance/types-insurance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InsuranceItemComponent,
    AddTypeInsuranceComponent,
    CreateTypeInsuranceComponent,
    TypesInsuranceComponent
  ],
  exports: [
    InsuranceItemComponent,
    AddTypeInsuranceComponent,
    CreateTypeInsuranceComponent,
    TypesInsuranceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TypeInsuranceModule { }
