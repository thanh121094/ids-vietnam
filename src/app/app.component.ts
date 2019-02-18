import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transaction search';

  message:string;

  receiveMessage($event) {
  	console.log('xxxxx', $event);
    this.message = $event;
  }

}
