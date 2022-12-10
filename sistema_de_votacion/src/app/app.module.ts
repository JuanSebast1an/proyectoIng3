import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';


@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, EstudianteComponent, FormularioComponent, EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
