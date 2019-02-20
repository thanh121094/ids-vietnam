import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-international-card',
  templateUrl: './international-card.component.html',
  styleUrls: ['./international-card.component.css']
})
export class InternationalCardComponent implements OnInit {

  title = 'Transaction search';
  exportFlag: string;

  constructor(public dialog: MatDialog,
              private exportData: DataService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    console.log(11111);
    this.exportFlag = 'false';
    this.exportData.exportExcel(this.exportFlag);
  }
}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: './dialog-overview-dialog.html',
})
export class DialogOverviewDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    private exportData: DataService) {}

  exportFlag: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.exportFlag = 'true';
    this.exportData.exportExcel(this.exportFlag);
    this.dialogRef.close();
  }
}
