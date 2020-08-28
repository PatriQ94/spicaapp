import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.css']
})
export class UserdialogComponent implements OnInit {

  contract: string[] = ['Full-time', 'Part-Time'];

  constructor(public dialogRef: MatDialogRef<UserdialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  //Dialog onClose event handler
  closeDialog(): void {
    this.dialogRef.close({data:'data'});
  }
}
