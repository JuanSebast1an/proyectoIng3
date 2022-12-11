import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit{

  modalSwitch:boolean;

  constructor(private modalSS:SwitchService){}

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch = valor})
  }

  openModal(){
    this.modalSwitch = true;
  }

partido1="Partido 1";
}
