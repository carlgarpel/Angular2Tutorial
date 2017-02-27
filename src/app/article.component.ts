import { Component } from '@angular/core';

import { Via } from './via';
import {Injectable} from '@angular/core';
import { ViaSeleccionada } from './via-seleccionada'


@Component({

  selector: 'article',

  providers: [ViaSeleccionada],

  template: `
    
    
  <div >
      <h2>Ficha: {{selectedVia.nombreVia}} </h2>
      <div><label>id: </label>{{selectedVia.id}}</div>
      <div>
        <label>Nombre: </label>
        <input [(ngModel)]="selectedVia.nombreVia" placeholder="name"/>
      </div>
    </div>
   
      
     
   
    `

})

 
@Injectable()
export class ArticleComponent {

  
constructor(private service: ViaSeleccionada) {}

  selectedVia: Via=  this.service.getVia();

 
  }

