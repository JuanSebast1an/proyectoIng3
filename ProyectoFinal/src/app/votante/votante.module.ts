import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotarComponent } from './votar/votar.component';
import { MunicipioCambioComponent } from './municipio-cambio/municipio-cambio.component';
import { InicioComponent } from './inicio/inicio.component';
import { VotanteRoutingModule } from './votante-routing.module';



@NgModule({
  declarations: [
    VotarComponent,
    MunicipioCambioComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    VotanteRoutingModule
  ],
  exports: [
    InicioComponent,
    MunicipioCambioComponent,
    VotarComponent
  ]
})
export class VotanteModule { }
