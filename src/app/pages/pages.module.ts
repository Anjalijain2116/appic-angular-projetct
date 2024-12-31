import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PagesComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    FormComponent,
    LifecycleComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    FormsModule,
    TranslateModule
  ]
})
export class PagesModule { }
