import { Component } from '@angular/core';
export class Via {
  id: number;
  tipoVia: string;
  nombreVia: string;
  distrito: number;
  seccion: number;
  codigoPostal: string
}

const VIAS: Via[] = [
  { id: 10, tipoVia: 'CALLE', nombreVia: 'ALTAMIRA', distrito: 7, seccion: 1, codigoPostal: '04006' },
  { id: 11, tipoVia: 'CALLE', nombreVia: 'BECERRA', distrito: 8, seccion: 6, codigoPostal: '04006' },
  { id: 12, tipoVia: 'CALLE', nombreVia: 'CARRERA DEL DARRO', distrito: 7, seccion: 3, codigoPostal: '04005' },
  { id: 13, tipoVia: 'CALLE', nombreVia: 'DINAMARCA', distrito: 7, seccion: 9, codigoPostal: '04005' },
  { id: 14, tipoVia: 'AVDA', nombreVia: 'FRANCISCO DE ASÍS', distrito: 7, seccion: 5, codigoPostal: '04003' },
  { id: 15, tipoVia: 'CALLE', nombreVia: 'GARCILASO DE LA VEGA', distrito: 7, seccion: 1, codigoPostal: '04003' },
  { id: 16, tipoVia: 'CALLE', nombreVia: 'HUEBRO', distrito: 6, seccion: 2, codigoPostal: '04004' },
  { id: 17, tipoVia: 'CALLE', nombreVia: 'LORCA', distrito: 4, seccion: 2, codigoPostal: '04005' },
  { id: 18, tipoVia: 'CALLE', nombreVia: 'MARÍA DE LA O', distrito: 2, seccion: 3, codigoPostal: '04006' },
  { id: 19, tipoVia: 'CALLE', nombreVia: 'PETENERA', distrito: 7, seccion: 5, codigoPostal: '04007' },
  { id: 20, tipoVia: 'CALLE', nombreVia: 'RIO DE JANEIRO', distrito: 7, seccion: 4, codigoPostal: '04001' },
  { id: 21, tipoVia: 'PLAZA', nombreVia: 'DERECHOS HUMANOS', distrito: 4, seccion: 6, codigoPostal: '04003' },
];

@Component({
  selector: 'my-app',
  template: `
    <header><h1>{{title}}</h1></header>
    <div id='main'>
      <article>
        <h2>Código: {{via.id}}</h2>
        <div  class="article"><label>Tipo de vía: </label>{{via.tipoVia}}</div>
        <div> <label>Nombre de vía: </label> </div>
      </article>

      <nav> 
        <label>Listado de vías: </label>
        <ul class="vias">
          <li *ngFor="let via of vias"
        [class.selected]="via === selectedVia"
        (click)="onSelect(via)">
        <span class="badge">{{via.id}} </span> {{via.nombreVia}} 
      </li>
    </ul>
        <input  [(ngModel)]="via.nombreVia" placeholder="via">
      </nav>
      <aside>Localizador</aside>

    </div>

     <footer>Vial - 2017</footer>

    `
})
 
export class AppComponent {
  title = 'Callejeros';
  vias = VIAS;
  selectedVia: Via;

  onSelect(via: Via): void {
    this.selectedVia = via;
  }
}