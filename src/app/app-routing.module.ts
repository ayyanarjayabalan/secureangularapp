import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { DirtycheckGuard } from './dirtycheck.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RoleAuthGuard } from './role-auth.guard';


const routes: Routes = [
  { path: 'first', component: FirstComponent, canDeactivate: [DirtycheckGuard] },
  { path: 'second', component: SecondComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivateChild: [RoleAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
