import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    FormularioComponent
  ]
})
export class LoginModule { }
