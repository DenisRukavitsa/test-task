import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    constructor(private http: Http) {}

    getEmployeesForProject(projectID: number): Observable<Employee[]> {
         return this.http.get(`assets/data/employee.project.${projectID}.json`)
            .map(res => {
                return <Employee[]>res.json().employees;
            });
    }
}
