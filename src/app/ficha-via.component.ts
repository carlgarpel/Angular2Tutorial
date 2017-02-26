import { Component, Input } from '@angular/core';

import { Via } from './via';



@Component({

  selector: 'mi-via-ficha',

  template: `

    <article  *ngIf="via">

        <h2>Código: </h2>

        <div  class="article"><label>Tipo de vía: </label>{{via.tipoVia}} </div>

        <div  class="article"><label>Nombre de vía: </label>{{via.nombreVia}} </div>

        <div> <label>Distrito: </label>{{via.distrito}} </div>

        <div> <label>Sección: </label>{{via.seccion}} </div>

        <div> <label>Código Postal: </label>{{via.codigoPostal}} </div>

    </article>

    <aside *ngIf="via">Edite el nombre de vía:



          <h2>{{via.nombreVia}}</h2>

          <div><label>id: </label>{{via.id}}</div>

          <div>

            <label>nombre: </label>

            <input [(ngModel)]="via.nombreVia" placeholder="via"/>

          </div>



    </aside>

  `

})

export class FichaViaComponent {

  @Input()

  via: Via;

}