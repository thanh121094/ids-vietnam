import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Finance} from '../../finance';
import {FINANCES} from '../../mock-finances';
import {displayedColumns} from './common';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {DataService} from '../../services/data.service';
import {ExcelService} from '../../services/excel.service';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css'],
})

export class FinancesComponent implements OnInit {
  displayedColumns = displayedColumns;
  dataSource: MatTableDataSource<Finance>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  message: object;
  exportFlag: string;
  itemsPerPage: number;
  lengthData: number;

  constructor(private data: DataService,
              private excelService: ExcelService,
              private exportData: DataService) {
    const finances: Finance[] = FINANCES;
    this.dataSource = new MatTableDataSource(finances);
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      const finances: Finance[] = FINANCES;
      let dataTable = filterFunction(finances, message);
      this.lengthData = dataTable.length;
      this.itemsPerPage = parseInt(this.message['display_number']);
      this.paginator._changePageSize(this.itemsPerPage);
      this.dataSource = new MatTableDataSource(dataTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.exportData.currentExport.subscribe(
      exportFlag => {
        this.exportFlag = exportFlag;
        console.log('tttttt', this.exportFlag);
        // this.excelService.exportAsExcelFile(this.dataSource.data, 'file-exported');
      });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  convertDate(date) {
    return formatDate(date);
  }

  truncateString(string, max) {
    return truncate(string, max);
  }
}

function filterFunction(finances, message) {
  // object filter includes multiple criteria.
  let objectFilter = {
    from_date: '',
    to_date: '',
  };
  for (let key in message) {
    if (message.hasOwnProperty(key) && message[key] !== '') {
      objectFilter[key] = message[key];
    }
  }
  let filtered = multiFilter(finances, objectFilter);

  let timeFromDate = setFromDate(objectFilter.from_date);
  let timeToDate = setToDate(objectFilter.to_date);
  let result = [];

  //Check from date to date are different with other criteria.
  if (objectFilter && objectFilter.from_date && objectFilter.to_date) {
    //Case: user chooses from date and to date
    for (let i in filtered) {
      if (filtered[i].date.localeCompare(timeFromDate) >= 0 &&
        filtered[i].date.localeCompare(timeToDate) < 0) {
        result.push(filtered[i]);
      }
    }
  } else if (objectFilter && objectFilter.from_date) {
    //Case: user chooses only from date
    for (let i in filtered) {
      if (filtered[i].date.localeCompare(timeFromDate) >= 0) {
        result.push(filtered[i]);
      }
    }
  } else if (objectFilter && objectFilter.to_date) {
    //Case: user choose only to date
    for (let i in filtered) {
      if (filtered[i].date.localeCompare(timeToDate) < 0) {
        result.push(filtered[i]);
      }
    }
  } else {
    result = filtered;
  }

  return result;
}

function multiFilter(array, filters) {
  const filterKeys = Object.keys(filters);
  for (let i in filters) {
    if (filters[i] === null) {
      filters[i] = '';
    }
  }
  // filters all elements passing the criteria
  return array.filter((item) => {
    // dynamically validate all filter criteria
    return filterKeys.every(key => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      if (key === 'transaction_state') {
        if (filters[key] === '0' && item['response'] === '0') return true;
        else if (filters[key] === '1' && item['response'] !== '0') return true;
        else return false;
      }
      if (key === 'display_number') return true;
      if (key === 'to_date' || key === 'from_date') return true;
      return filters[key].includes(item[key]);
    });
  });
}

function setFromDate(from_date) {
  if (from_date) {
    let newFromDate = new Date(from_date);
    newFromDate.setUTCHours(24, 0, 0, 0);
    return newFromDate.toISOString();
  }
}

function setToDate(to_date) {
  if (to_date) {
    let newToDate = new Date(to_date);
    newToDate.setDate(new Date(newToDate).getDate() + 1);
    newToDate.setUTCHours(24, 0, 0, 0);
    return newToDate.toISOString();
  }
}

function formatDate(dateVal) {
  let newDate = new Date(dateVal);

  let sMonth = padValue(newDate.getUTCMonth() + 1);
  let sDay = padValue(newDate.getUTCDate());
  let sYear = newDate.getUTCFullYear();
  let sHour = newDate.getUTCHours();
  let sMinute = padValue(newDate.getUTCMinutes());
  let sAMPM = 'AM';

  let iHourCheck = sHour;

  if (iHourCheck > 12) {
    sAMPM = 'PM';
    sHour = iHourCheck - 12;
  }
  else if (iHourCheck === 0) {
    sHour = 12;
  }

  sHour = padValue(sHour);

  return sDay + '/' + sMonth + '/' + sYear + ' ' + sHour + ':' + sMinute + ' ' + sAMPM;
}

function padValue(value) {
  return (value < 10) ? '0' + value : value;
}

function truncate(value, maxChars) {
  return value.Length <= maxChars ? value : value.substring(0, maxChars) + '...';
}
