import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { MarksComponent } from './pages/AdminPages/marks/marks.component';
import { TypesInsuranceComponent } from './pages/AdminPages/types-insurance/types-insurance.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { UserPanelComponent } from './pages/UserPages/user-panel/user-panel.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/insurance', component: TypesInsuranceComponent, canActivate: [AuthGuard] },
  { path: 'admin/marks', component: MarksComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserPanelComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginPageComponent },
  { path: '', component: StartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
