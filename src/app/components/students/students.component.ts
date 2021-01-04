import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students : student[]=[
{name: 'Mikle', photoUrl: 'assets/1.jpg'},
{name: 'Abanob', photoUrl: 'assets/2.jpg'},
{name: 'Sara', photoUrl: 'assets/3.jpg'},
{name: 'Monika', photoUrl: 'assets/4.jpg'},
{name: 'Mallak', photoUrl: 'assets/5.jpg'},
{name: 'Ali', photoUrl: 'assets/6.jpg'},
{name: 'Hossam', photoUrl: 'assets/7.jpg'},
{name: 'Merihan', photoUrl: 'assets/8.jpg'},
{name: 'Ahmed', photoUrl: 'assets/9.jpg'},
{name: 'Jacob', photoUrl: 'assets/10.jpg'},
]
  constructor() { }

  ngOnInit() {
  }

}
