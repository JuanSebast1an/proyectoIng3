import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioinformesComponent } from './inicioinformes/inicioinformes.component';
import { InformesRoutingModule } from './informes-routing.module';



@NgModule({
  declarations: [
    InicioinformesComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule
    
  ],
  /*exports: [
    InicioinformesComponent
  ]*/
})
export class InformesModule { }
