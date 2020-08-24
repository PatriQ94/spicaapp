import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {SettingsComponent} from 'src/app/modules/settings/settings.component';
import { RouterModule } from '@angular/router';
import {EmployeesComponent} from 'src/app/modules/employees/employees.component';

@NgModule({
  declarations: [
    DefaultComponent,
    SettingsComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
