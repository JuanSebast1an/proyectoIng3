import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioinformesComponent } from './inicioinformes/inicioinformes.component';
import { InformeoneComponent } from './informeone/informeone.component';

const routes: Routes = [
  {
    path: 'inicioInformes', 
    component: InicioinformesComponent,
   children: [
      {
        path: 'informe1',
        component: InformeoneComponent
      }
    ]
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
export class InformesRoutingModule { }