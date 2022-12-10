import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService]
})
export class AppComponent implements OnInit{

  personas: Persona[] = []
  titulo2 = 'Listado de personas';

  constructor(private personasService: PersonaService) { }
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  //personaAgregada(persona: Persona) {
    //this.personas.push(persona);
    //this.personasService.agregarPersona(persona);
  //}
}
