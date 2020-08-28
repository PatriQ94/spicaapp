import { Component, OnInit } from '@angular/core';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  //Variables
  accessToken = localStorage.getItem("access_token");
  helpText = "Access token will be automatically updated change"

  constructor(public _snackBar: SnackBarComponent) { }

  ngOnInit(): void {
  }

  //Clears access token from localStorage on click event
  clearAccessToken() {
    localStorage.removeItem("access_token");
    this.accessToken = null;
    this._snackBar.snackBarSuccess("Successfully saved removed the access token from localStorage");
  }

  //Event that updates localStorage with the new access token
  onLabelChange($event){
    this.accessToken = $event.target.value
    localStorage.setItem("access_token" , this.accessToken);
    this._snackBar.snackBarSuccess("Successfully saved a new access token");
  }
}
