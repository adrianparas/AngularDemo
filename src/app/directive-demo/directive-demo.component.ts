import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {
  isLogIn : boolean = true;
  isLogOut : boolean = false;

  year : number|undefined;
  isLeapYear : boolean=false;

  department_list=["IT","Admin","Accounts","Dev","Q4","Prod"];

  selectedFruit!:string;

  checkLeapYear() {
    if(this.year !== undefined) {
      this.isLeapYear = (this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0));
    } else {
      this.isLeapYear = false;
    }
  }
}
