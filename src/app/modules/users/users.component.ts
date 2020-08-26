import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {HttpClient, HttpHeaders } from '@angular/common/http';

export interface Users{
  "Id":number;
  "LastName":string;
  "FirstName":string;
  "Address":string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;  

  ELEMENT_DATA:Users[];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Address'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);

  constructor(private _httpClient: HttpClient) { }


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log("Loaded user component")
    this.getUsers();
  }

   //Adds a new user to the database and refreshes the grid
  addNewUser() {
    
  }

  refreshData(){
    // this.dataSource = new MatTableDataSource<PeriodicElement>( [
    //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}]
    // );
    this.getUsers();
  }

  getUsers(){

    var headers = new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*',
      'Accept': '*/*',
      'Content-Type': 'text/plain',
      'Authorization':'SpicaToken EBD9E633-EF6E-468D-BD0A-E9183B615EA7'
    });

    //TODO: Wait for CORS fix
    // var response = this._httpClient.get("http://rdweb.spica.com:5213/timeapi/employee", {headers : headers});
    // response.subscribe(r => this.dataSource.data = r as Users[])

    this.dataSource.data = [
      {Id: 1, LastName: 'Pitt', FirstName: "Bradd", Address: 'Somewhere'},
      {Id: 2, LastName: 'Francisco', FirstName: "Pablo", Address: 'Over'},
      {Id: 3, LastName: 'Cooper', FirstName: "Bradley", Address: 'The'},
      {Id: 4, LastName: 'Jennifer', FirstName: "Aniston", Address: 'Rainbow'},
    ];
  }
}
