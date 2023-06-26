import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  EmployeeObj: Employee[] = [
    {empId:10011,empName:'John', dept:'Dev'},
    {empId:10012,empName:'Rose',dept:'QA'},
    {empId:10012,empName:'Vijay',dept:'Dev'},
    {empId:10012,empName:'Vikram',dept:'IT'},
    {empId:10012,empName:'Ram',dept:'Dev'}
  ]
  empId = 10001;
  empName = "John";
  dept = "Development";
  show1: boolean=true;

  show() {
    console.log("Employee Id: " + this.empId);
    console.log("Employee Name: " + this.empName);
    console.log("Department " + this.dept);
  }
}
