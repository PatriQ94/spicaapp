import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  accessToken = localStorage.getItem("access_token");
  helpText = "Access token will be automatically updated change"

  ngOnInit(): void {
  }

  //Clears access token from localStorage on click event
  clearAccessToken() {
    localStorage.removeItem("access_token");
    this.accessToken = null;
  }

  //Event that updates localStorage with the new access token
  onLabelChange($event){
    this.accessToken = $event.target.value
    localStorage.setItem("access_token" , this.accessToken);
  }
}
