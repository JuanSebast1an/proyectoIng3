import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  email: string= "";
  password: string="";

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
