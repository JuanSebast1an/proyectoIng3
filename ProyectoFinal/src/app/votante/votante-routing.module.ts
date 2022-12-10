import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VotarComponent } from './votar/votar.component';

const routes: Routes = [
  {
    path: 'inicioVotante', 
    component: InicioComponent
  },
  {
    path: 'votaciones',
    component: VotarComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class VotanteRoutingModule { }