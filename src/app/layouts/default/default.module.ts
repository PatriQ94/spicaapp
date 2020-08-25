import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {SettingsComponent} from 'src/app/modules/settings/settings.component';
import { RouterModule } from '@angular/router';
import { MaterialModules} from 'src/app/materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { PresenceComponent } from 'src/app/modules/presence/presence.component';
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [
    DefaultComponent,
    SettingsComponent,
    UsersComponent,
    PresenceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModules,
    BrowserAnimationsModule
  ]
})
export class DefaultModule { }
