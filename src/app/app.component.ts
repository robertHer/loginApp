import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  homeEnabled:boolean;
  links:boolean = true;

//   disableBtn(){
//     this.linkEnabled = false;
//   }
}
