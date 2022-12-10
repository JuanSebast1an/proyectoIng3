import { Component } from '@angular/core';

@Component({
  selector: 'app-candidato-register',
  templateUrl: './candidato-register.component.html',
  styleUrls: ['./candidato-register.component.css']
})
export class CandidatoRegisterComponent {
  cedula: string="";
  candidato: string="";
  eslogan: string="";
  partidopolitico: string="";
  descripcion: string="";
  intensiones: string="";

  constructor() {}

  registerc() {
    console.log(this.cedula);
    console.log(this.candidato);
    console.log(this.eslogan);
    console.log(this.partidopolitico);
    console.log(this.descripcion);
    console.log(this.intensiones);
  }
}
