import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RecuperarComponent } from './recuperar/recuperar.component';


@NgModule({
  declarations: [
    FormularioComponent,
    RecuperarComponent
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
