import { Component } from "@angular/core";


@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{ 
    deshabilitar=false;
    Mensaje = '';
    titulo = 'ingeniero';
    mostrar = false;
    titulo2 = 'Listado de personas';
    nombreInput:string = '';
    apellidoInput:string = '';



    agregarPersona(){
        this.mostrar = true;
        this.Mensaje = 'Persona agregada';
    }

    

   /* modificarTitulo(event: Event){
        console.log('Entrando a metodo modificar titulo')
        this.titulo = (<HTMLInputElement>event.target).value;
    }*/
}