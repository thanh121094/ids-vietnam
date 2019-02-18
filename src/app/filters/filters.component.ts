import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from "../data.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {

  message: object;
  constructor(private data: DataService) {
  }

  onSubmit(f: NgForm) {
    console.log(f.value, this.message);
    this.message = f.value;
    this.data.changeMessage(this.message);
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
 
}
