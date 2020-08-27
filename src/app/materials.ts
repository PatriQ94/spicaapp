import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule ({
  imports: [MatButtonModule,MatToolbarModule, MatIconModule, MatDividerModule, MatCardModule, MatInputModule, 
    MatFormFieldModule, FlexLayoutModule, MatTooltipModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatDialogModule, MatSelectModule, MatRadioModule, MatSnackBarModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatCardModule, MatInputModule, MatFormFieldModule, 
    FlexLayoutModule, MatTooltipModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatSelectModule, 
    MatRadioModule, MatSnackBarModule],
})

export class MaterialModules{}