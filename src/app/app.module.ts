import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminFuncItemComponent } from './components/admin-func-item/admin-func-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { AdminNavsComponent } from './components/admin-navs/admin-navs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeInsuranceModule } from './modules/type-insurance/type-insurance.module';
import { MarksModule } from './modules/marks/marks.module';
import { MarksTablesComponent } from './components/marks-tables/marks-tables.component';
import { EnginePowerModule } from './modules/engine-power/engine-power.module';
import { ParkingPlaceModule } from './modules/parking-place/parking-place.module';
import { ModelsTableComponent } from './components/models-table/models-table.component';
import { ModelsModule } from './modules/models/models.module';
import { MethodUseComponent } from './components/Tables/method-use/method-use.component';
import { MethodUseModule } from './modules/method-use/method-use.module';
import { TypeOwnerTableComponent } from './components/Tables/type-owner-table/type-owner-table.component';
import { TypeOwnerModule } from './modules/type-owner/type-owner.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './pages/UserPages/user-panel/user-panel.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminFuncItemComponent,
    FooterComponent,
    MainNavbarComponent,
    AdminNavsComponent,
    MarksTablesComponent,
    LoginPageComponent,
    LoginFormComponent,
    UserPanelComponent,
    StartPageComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TypeInsuranceModule,
    EnginePowerModule,
    MarksModule,
    ParkingPlaceModule,
    ModelsModule,
    MethodUseModule,
    TypeOwnerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
