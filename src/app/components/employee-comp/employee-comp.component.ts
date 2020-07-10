import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee'

@Component({
  selector: 'app-employee-comp',
  templateUrl: './employee-comp.component.html',
  styleUrls: ['./employee-comp.component.css']
})
export class EmployeeCompComponent implements OnInit {

  employees: Employee[]
  constructor() { }

  ngOnInit(): void {
    this.employees = [{
        eid: 1,
        ename: 'Aiswarya',
        desig: 'Software Engineer',
        joindate: new Date('08/17/2000 09:00:00'), 
        salary: 1300000
      },
      {
        eid: 2,
        ename: 'Reshma',
        desig: 'Software Engineer',
        joindate: new Date('08/09/2020 09:00:00'),
        salary: 6500000
      }
    ]

  }

}
