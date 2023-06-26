export class Employee {
    empId!: number;
    empName: string;
    dept: string;

    constructor(empId: number, empName: string, dept: string) {
        this.empId = empId;
        this.empName = empName;
        this.dept = dept;
    }
}
