import { DateService } from '../date.service/date.service';
import { MenuItem, Message } from 'primeng/components/common/api';
import { Employee } from '../employee/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() projectID;
  menuItems: MenuItem[];
  messages: Message[];
  displayDialog: boolean;
  newEmployee: boolean;
  employees: Employee[];
  employee: Employee;
  selectedEmployee: Employee;
  filename: string;

  constructor(private employeeService: EmployeeService,
              private dateService: DateService) {
    const date = this.dateService.getTodaysDate();
    this.filename = `ISP National APHT Report ${date}`;
  }

  ngOnInit() {
      this.employeeService.getEmployeesForProject(this.projectID).subscribe(employees => {
        this.employees = employees;
      });

      this.menuItems = [
        {label: 'Modify', icon: 'fa-pencil', command: (event) => this.modifyEmployee(this.selectedEmployee)},
        {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteEmployee()}
      ];
  }

  showDialogToAdd() {
      this.newEmployee = true;
      this.employee = new Employee();
      this.displayDialog = true;
  }

  save() {
    if ((!this.employee) ||
        (this.employee.id === undefined ||
        !this.employee.name ||
        !this.employee.surname ||
        !this.employee.position ||
        this.employee.tasksNumber === undefined)) {
        this.messages = [{
            severity: 'error',
            summary: 'Validation failed',
            detail: `Please fill all the fields before saving`
        }];
        return;
    }

    const employees = [...this.employees];
    if (this.newEmployee) {
      employees.push(this.employee);
    } else {
      employees[this.findSelectedEmployeeIndex()] = this.employee;
    }
    this.employees = employees;
    this.employee = null;
    this.displayDialog = false;
  }

  deleteEmployee() {
      const index = this.findSelectedEmployeeIndex();
      this.employees = this.employees.filter((val, i) => i !== index);
      this.employee = null;
      this.displayDialog = false;
  }

  modifyEmployee(emp: Employee) {
      this.newEmployee = false;
      this.employee = this.cloneEmployee(emp);
      this.displayDialog = true;
  }

  cloneEmployee(c: Employee): Employee {
      const employee = new Employee();
      for(let prop in c) {
          employee[prop] = c[prop];
      }
      return employee;
  }

  findSelectedEmployeeIndex(): number {
      return this.employees.indexOf(this.selectedEmployee);
  }

}
