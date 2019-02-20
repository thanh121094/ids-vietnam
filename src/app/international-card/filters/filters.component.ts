import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {

  message: object;
  criteria: {
    merchant_id: string;
    from_date: string;
    to_date: string;
    tranaction_id: string;
    order_ref: string;
    trans_ref: string;
    card_number: string;
    card_type: string;
    currency: string;
    trans_type: string;
    transaction_state: string;
    display_number: number;
  };
  constructor(private data: DataService) {
  }

  @ViewChild(NgForm) myForm: NgForm;

  onSubmit(f: NgForm) {
    this.message = f.value;
    // set value = "" if the crieria is undefined;
    for (let i in this.message) {
      if(this.message[i] === undefined) {
        this.message[i] = "";
      }
    }
    localStorage.setItem('filterObject', JSON.stringify(this.message));
    this.data.changeMessage(this.message);
  }

  clearValue() {
    this.myForm.resetForm();
  }

  ngOnInit() {
    this.criteria = Object.assign({}, JSON.parse(localStorage.getItem('filterObject')));
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.changeMessage(this.criteria);
  }

}
