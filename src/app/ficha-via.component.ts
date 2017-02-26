import { Component, Input } from '@angular/core';

import { Via } from './via';

//<div  *ngIf="via">

@Component({

  selector: 'article',

  template: `

   <div  *ngIf="selectedVia">

        <h2>Código: </h2>

        <div  class="article"><label>Tipo de vía: </label>{{selectedVia.tipoVia}} </div>

        <div  class="article"><label>Nombre de vía: </label>{{selectedVia.nombreVia}} </div>

        <div> <label>Distrito: </label>{{selectedVia.distrito}} </div>

        <div> <label>Sección: </label>{{selectedVia.seccion}} </div>

        <div> <label>Código Postal: </label>{{selectedVia.codigoPostal}} </div>

     </div>

    

  `

})

export class FichaViaComponent {

 

 
}