import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CandidatoRegisterComponent } from './candidato-register/candidato-register.component';
import { IniciofuncionarioComponent } from './iniciofuncionario/iniciofuncionario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';



@NgModule({
  declarations: [
    UserRegisterComponent,
    CandidatoRegisterComponent,
    IniciofuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
