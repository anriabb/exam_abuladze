import { Component, OutputEmitterRef } from '@angular/core';
import { ParentUser } from './parent-user';
import { Input, Output } from '@angular/core';
import { ChildUser } from './child-user';
import { EventEmitter } from 'stream';
import { forms}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnriAbuladze';

  arrayUsers: any[] = [
    {firstname: "anri", lastname: "abuladze", age: 29},
    {firstname: "luka", lastname: "wiqarishvili", age: 19},
    {firstname: "daniel", lastname: "kolotashvili", age: 30},
    {firstname: "levan", lastname: "markozia", age: 17},
    {firstname: "misho", lastname: "vero", age: 31}
  ];

  parentUserArray: ParentUser[] =[
    {id:1, firstName:"Jimmy", lastName:"Page", dateOfBirth:"1995-01-01", phoneNumber:1234567, email:"jimmy@zeppelin"},
    {id:2, firstName:"John", lastName:"Bonham", dateOfBirth:"1997-01-01", phoneNumber:7654321, email:"john@zeppelin"},
    {id:3, firstName:"Robert", lastName:"Plant", dateOfBirth:"1998-01-01", phoneNumber:5678912, email:"robert@zeppelin"},
    {id:4, firstName:"John", lastName:"Jones", dateOfBirth:"1999-01-01", phoneNumber:12349876, email:"JohnJ@zeppelin"}
  ];


  childUserArray: ChildUser[] = [
    {id:1, firstName:"Jimmy", lastName:"Page", dateOfBirth:"1995-01-01", phoneNumber:1234567, email:"jimmy@zeppelin"},
    {id:2, firstName:"John", lastName:"Bonham", dateOfBirth:"1997-01-01", phoneNumber:7654321, email:"john@zeppelin"},
    {id:3, firstName:"Robert", lastName:"Plant", dateOfBirth:"1998-01-01", phoneNumber:5678912, email:"robert@zeppelin"},
    {id:4, firstName:"John", lastName:"Jones", dateOfBirth:"1999-01-01", phoneNumber:12349876, email:"JohnJ@zeppelin"}
  ];


  profileForm = new formGroup({
    id: new formControl('', [Validators.required]),
    firstName: new formControl('', [Validators.required]),
    lastName: new formControl('', [Validators.required]),
    dateOfBirth: new formControl('', [Validators.required]),
    phoneNumber: new formControl('', [Validators.required]),
    email: new formControl('', [Validators.required])
  })

  
}
