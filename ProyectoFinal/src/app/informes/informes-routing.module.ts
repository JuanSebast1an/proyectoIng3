import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioinformesComponent } from './inicioinformes/inicioinformes.component';

const routes: Routes = [
  {
    path: '', 
    component: InicioinformesComponent,
    children: [
      {
        path: '**', redirectTo: 'panel'
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