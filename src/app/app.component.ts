import { Component } from '@angular/core';
import { Via } from './via';

const VIAS: Via[] = [
  {id: 10, tipoVia: 'CALLE', nombreVia: 'ALTAMIRA', distrito: 7, seccion: 1, codigoPostal: '04006' },
  {id: 11, tipoVia: 'CALLE', nombreVia: 'BECERRA', distrito: 8, seccion: 6, codigoPostal: '04006' },
  {id: 12, tipoVia: 'CALLE', nombreVia: 'CARRERA DEL DARRO', distrito: 7, seccion: 3, codigoPostal: '04005' },
  {id: 13, tipoVia: 'CALLE', nombreVia: 'DINAMARCA', distrito: 7, seccion: 9, codigoPostal: '04005' },
  {id: 14, tipoVia: 'AVDA', nombreVia: 'FRANCISCO DE ASÍS', distrito: 7, seccion: 5, codigoPostal: '04003' },
  {id: 15, tipoVia: 'AVDA', nombreVia: 'JUAN', distrito: 7, seccion: 5, codigoPostal: '04003' }
 
];

@Component({
  selector: 'my-app',
  template: `
    <header><h1>{{title}}</h1></header>
    <div id='main'>
     <mi-via-ficha [via]="selectedVia"></mi-via-ficha>

      <nav> 
        <label>Listado de vías: </label>
        <ul class="vias">
          <li *ngFor="let via of cvias"
             [class.selected]="via === selectedVia"
             (click)="onSelect(via)">
                <span class="badge">{{via.id}} </span> {{via.nombreVia}}
         </li>
        </ul>
        
      </nav>
      

    </div>
 
     <footer>Vial - 2017</footer>
    `
})
 
export class AppComponent {
  title = 'Callejeros';
  cvias = VIAS;
  selectedVia: Via;
  

  onSelect(via: Via): void {
    this.selectedVia = via;
  }
}