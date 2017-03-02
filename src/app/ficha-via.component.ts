import { Component, Input, OnInit } from '@angular/core';


import { Via } from './via';
import { ViaSeleccionada } from './via.service';

//<div  *ngIf="via">

@Component({

  selector: 'article',
  providers: [ViaSeleccionada],


  template: `

   <div >

        <h2>Código: </h2>

        <div  class="article"><label>Tipo de vía: </label>{{selectedVia.tipoVia}} </div>

        <div  class="article"><label>Nombre de vía: </label>{{selectedVia.nombreVia}} </div>

        <div> <label>Distrito: </label>{{selectedVia.distrito}} </div>

        <div> <label>Sección: </label>{{selectedVia.seccion}} </div>

        <div> <label>Código Postal: </label>{{selectedVia.codigoPostal}} </div>

     </div>

    

  `

})

export class FichaViaComponent implements OnInit {
 selectedVia: Via;



  constructor(private service: ViaSeleccionada) { }
  ngOnInit() {
    this.selectedVia = this.service.getViaSeleccionada();
    console.log(this.selectedVia.nombreVia)
  }


 
}