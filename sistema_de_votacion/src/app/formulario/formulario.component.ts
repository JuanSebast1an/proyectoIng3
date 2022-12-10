import { Component } from '@angular/core';
import { LogginService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LogginService, PersonaService]
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string = '';
  apellidoInput:string = '';

constructor(private logginService:LogginService, private personasService:PersonaService){}

  agregarPersona2(){
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      this.logginService.enviarMensajeAConsola("Enviamospersona: "+persona1.apellido+persona1.nombre)
      //this.personaCreada.emit(persona1);
      this.personasService.agregarPersona(persona1);
  }
}
