import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports:[
    FormularioComponent
  ]
})
export class LoginModule { }
