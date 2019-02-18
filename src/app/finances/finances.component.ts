import {Component, OnInit, ViewChild} from '@angular/core';
import { Finance } from '../finance';
import { FINANCES } from '../mock-finances';
import { displayedColumns } from './common';
import { MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})

export class FinancesComponent implements OnInit {
  displayedColumns = displayedColumns;
  dataSource: MatTableDataSource<Finance>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const finances: Finance[] = FINANCES;
    this.dataSource = new MatTableDataSource(finances);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
