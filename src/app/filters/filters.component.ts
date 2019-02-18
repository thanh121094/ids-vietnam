import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {

  constructor() {
  }

  onSubmit() {
    console.log('aaaaaaa');
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

  ngOnInit() {
  }
 
}
