import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //Successful notification (toast/snackbar) with green color
  snackBarSuccess(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 3000,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['success']
    });
  }

  //Error notification (toast/snackbar) with red color
  snackBarError(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 3000,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['error']
    });
  }
}
