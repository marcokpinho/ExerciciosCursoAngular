import { Component } from '@angular/core';
import { HoraAtualService } from './hora.service';

@Component({
  selector: 'hora-atual',
  template: '<p>{{HoraMinuto}}</p>'
})
export class HoraAtualComponent {
  HoraMinuto;
  constructor(horaAtualService: HoraAtualService) {
    horaAtualService.generateHora(1000, horaMinuto => this.HoraMinuto = horaMinuto);
  }
}
