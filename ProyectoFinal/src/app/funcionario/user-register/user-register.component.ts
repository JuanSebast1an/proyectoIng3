import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  cedula: string="";
  password: string="";
  confirmPassword: string="";

  constructor() {}

  register() {
    console.log(this.cedula);
    console.log(this.password);
  }
}
