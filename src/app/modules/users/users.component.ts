import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UserdialogComponent } from '../userdialog/userdialog.component';

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

const headers = new HttpHeaders({
  'Accept': '*/*',
  'Content-Type': 'application/json',
  'Authorization': localStorage.getItem("access_token")
});

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;  


  //Variables
  ELEMENT_DATA:Users[];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email', 'Address', 'Unit1', 'Unit2', 'Unit3'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);
  newUserFirstName:string;
  newUserLastName:string;

  constructor(private _httpClient: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //Load users on component init
    this.getUsers();
  }

   //Adds a new user to the database and refreshes the grid
  submitNewUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.data = {
      newUserFirstName : this.newUserFirstName,
      newUserLastName : this.newUserLastName
    }

    //Open dialog window
    const dialogRef = this.dialog.open(UserdialogComponent,dialogConfig);

    //Subscripte to dialog onClose event
    dialogRef.afterClosed().subscribe(result => {

      if(result.newUserFirstName == null || result.newUserLastName == null)
      {
        //Required fields were not provided, return
        return;
      }

      //Add required properties
      var toInsert:Users = {
        FirstName : result.newUserFirstName,
        LastName : result.newUserLastName,
      };

      //Add optional properties
      if(result.newUserAddress != null){
        toInsert.Address = result.newUserAddress;
      }
      if(result.newUserGender != null){
        toInsert.Unit1 = result.newUserGender;
      }
      if(result.newUserContract != null){
        toInsert.Unit2 = result.newUserContract;
      }
      if(result.newUserContinent != null){
        toInsert.Unit3 = result.newUserContinent;
      }
      if(result.newUserEmail != null){
        toInsert.Email = result.newUserEmail;
      }

      //Insert new user to database
      this.addNewUser(toInsert);
    });
  }

  //Refresh table data
  refreshData(){
    this.getUsers();
  }

  //Post new user to Spica API
  addNewUser(toInsert){
    this._httpClient.put("http://rdweb.spica.com:5213/timeapi/employee",
    toInsert,
    {headers})
    .subscribe(
        val => {
            //Refresh grid upon a successful insert
            this.refreshData();
        },
        response => {
            //Error occured
        },
        () => {
            //Observable completed
        }
    );
  
  }

  //Get users from Spica API
  getUsers(){
    var response = this._httpClient.get("http://rdweb.spica.com:5213/timeapi/employee", {headers : headers});
    response.subscribe(r => this.dataSource.data = r as Users[])
  }

  //Filtering on the table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
