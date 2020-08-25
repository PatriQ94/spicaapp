import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule ({
  imports: [MatButtonModule,MatToolbarModule, MatIconModule, MatDividerModule, MatCardModule, MatInputModule, MatFormFieldModule, FlexLayoutModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatCardModule, MatInputModule, MatFormFieldModule, FlexLayoutModule],
})

export class MaterialModules{}