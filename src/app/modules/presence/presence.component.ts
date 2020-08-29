import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatTableDataSource } from '@angular/material/table';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface OrganizationalUnit  {
  Id:number;
  Name:string;
  Parent:number;
}

export interface Users  {
  Id?:number;
  LastName:string;
  FirstName:string;
  Email?:string;
  Address?:string;
  Unit1?:string;
  Unit2?:string;
  Unit3?:string;
}

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;  

  //Variables
  ELEMENT_DATA:Users[];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email', 'Address', 'Unit1', 'Unit2', 'Unit3'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);
  reload = false;
  helpText = "If checked then the Time API will recalculate presence information rather than using the cached one."
  
  constructor(public _httpClient: HttpClient, public _snackBar: SnackBarComponent) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getUsers();
  }

  getUsers(){

    //Verify that the access token is set
    if(this.accessTokenIsNull()){
      return;
    }
    
    //Get timestamp for all following requests
    var currentDate:string = new Date().toISOString();

    //Set headers for all requests
    var headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("access_token")
    });

    //Fetch all users
    var response = this._httpClient.get("http://rdweb.spica.com:5213/timeapi/employee", {headers : headers});
    response.subscribe(
      success =>  {
        this.dataSource.data = [];
        this.getPresenceForEachUser(headers,success as Users[],currentDate);
      },
      error => { 
        this._snackBar.snackBarError("An error occurred while fetching users")
        return;
      });
  }

  //Checks for each users presence
  getPresenceForEachUser(headers:HttpHeaders, users:Users[], currentDate:string){

    //Verify that the access token is set
    if(this.accessTokenIsNull()){
      return;
    }
    
    for (let index = 0; index < users.length; index++) {
      let param = new HttpParams()
      .set('Date', currentDate)
      .set('ID', users[index].Id.toString())
      .set('Reload', this.reload.toString());

      var response = this._httpClient.get("http://rdweb.spica.com:5213/timeapi/Presence", {headers :headers, params:param})
      response.subscribe(
          //Response successful
          success => {
            if(success as boolean){

              //If the user is present, push user data to the table
              this.dataSource.data.push(users[index]);

              //Manually trigger re-render of the table
              this.dataSource.data = [...this.dataSource.data]; 
            }
          },
          //An error occurred
          error => {
            this._snackBar.snackBarError("An error occurred while checking user presence")
            return;
          }
      );
    }
  }

  //Verifies if the access token is set
  accessTokenIsNull():boolean{
    if(localStorage.getItem("access_token") == null || localStorage.getItem("access_token") == ""){
      this._snackBar.snackBarError("Access token is missing. Please first set the access token.")
      return true;
    }
    return false;
  }
}
