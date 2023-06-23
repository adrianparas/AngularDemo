import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empId = 10001;
  empName = "John";
  dept = "Development";

  show() {
    console.log("Employee Id: " + this.empId);
    console.log("Employee Name: " + this.empName);
    console.log("Department " + this.dept);
  }
}
