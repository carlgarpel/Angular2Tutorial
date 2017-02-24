import { Component } from '@angular/core';
export class Via {
  id: number;
  tipoVia: string;
  nombreVia: string;
  distrito: number;
  seccion: number;
  codigoPostal: string;
  }

const VIAS: Via[] = [
  {id: 10, tipoVia: 'CALLE', nombreVia: 'ALTAMIRA', distrito: 7, seccion: 1, codigoPostal: '04006' },
  {id: 11, tipoVia: 'CALLE', nombreVia: 'BECERRA', distrito: 8, seccion: 6, codigoPostal: '04006' },
  {id: 12, tipoVia: 'CALLE', nombreVia: 'CARRERA DEL DARRO', distrito: 7, seccion: 3, codigoPostal: '04005' },
  {id: 13, tipoVia: 'CALLE', nombreVia: 'DINAMARCA', distrito: 7, seccion: 9, codigoPostal: '04005' },
  {id: 14, tipoVia: 'AVDA', nombreVia: 'FRANCISCO DE ASÍS', distrito: 7, seccion: 5, codigoPostal: '04003' }
  {id: 15, tipoVia: 'AVDA', nombreVia: 'FRANCISCO DE ASÍS', distrito: 7, seccion: 5, codigoPostal: '04003' }
 
];

@Component({
  selector: 'my-app',
  template: `
    <header><h1>{{title}}</h1></header>
    <div id='main'>
      <article  *ngIf="selectedVia">
        <h2>Código: </h2>
        <div  class="article"><label>Tipo de vía: </label>{{selectedVia.tipoVia}} </div>
        <div  class="article"><label>Nombre de vía: </label>{{selectedVia.nombreVia}} </div>
        <div> <label>Distrito: </label>{{selectedVia.distrito}} </div>
        <div> <label>Sección: </label>{{selectedVia.seccion}} </div>
        <div> <label>Código Postal: </label>{{selectedVia.codigoPostal}} </div>
      </article>

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
     <aside *ngIf="selectedVia">Edite el nombre de vía:

          <h2>{{selectedVia.nombreVia}}</h2>
          <div><label>id: </label>{{selectedVia.id}}</div>
          <div>
            <label>nombre: </label>
            <input [(ngModel)]="selectedVia.nombreVia" placeholder="via"/>
          </div>

     </aside>
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