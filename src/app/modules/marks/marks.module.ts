import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksTableComponent } from 'src/app/components/Tables/marks-table/marks-table.component';
import { MarksComponent } from 'src/app/pages/AdminPages/marks/marks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarksTableComponent,
    MarksComponent
  ],
  exports: [
    MarksTableComponent,
    MarksComponent
  ]
})
export class MarksModule { }
