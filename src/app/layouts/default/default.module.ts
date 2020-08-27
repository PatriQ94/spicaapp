import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {SettingsComponent} from 'src/app/modules/settings/settings.component';
import { RouterModule } from '@angular/router';
import { MaterialModules} from 'src/app/materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { UserdialogComponent } from 'src/app/modules/userdialog/userdialog.component';
import { PresenceComponent } from 'src/app/modules/presence/presence.component';
import { SharedModule } from 'src/app/shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    SettingsComponent,
    UsersComponent,
    PresenceComponent,
    UserdialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class DefaultModule { }
