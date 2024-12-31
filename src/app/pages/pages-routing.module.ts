import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouteGuard } from '../core/guards/route.guard';
import { FormComponent } from './form/form.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'parent', component: ParentComponent, canActivate:[RouteGuard]},
  { path: 'child/:id', component: ChildComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'feature', loadChildren: () => import('../features/feature/feature.module').then(m => m.FeatureModule) },
  {path: 'login', component: LoginComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
