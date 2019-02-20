import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  private exportSource = new BehaviorSubject('false');
  currentExport = this.exportSource.asObservable();

  constructor() { }

  changeMessage(message: object) {
    this.messageSource.next(message)
  }

  exportExcel(exportFlag: string) {
    console.log('xxxxx', exportFlag);
    this.exportSource.next(exportFlag)
  }
}
