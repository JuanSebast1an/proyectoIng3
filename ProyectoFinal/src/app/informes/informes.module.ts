import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioinformesComponent } from './inicioinformes/inicioinformes.component';
import { InformesRoutingModule } from './informes-routing.module';
import { InformeoneComponent } from './informeone/informeone.component';
import { InformetwoComponent } from './informetwo/informetwo.component';
import { InformethreeComponent } from './informethree/informethree.component';
import { InformefourComponent } from './informefour/informefour.component';



@NgModule({
  declarations: [
    InicioinformesComponent,
    InformeoneComponent,
    InformetwoComponent,
    InformethreeComponent,
    InformefourComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule
    
  ]
})
export class InformesModule { }
