import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { Via } from './via';

import {NavService}   from './nav.service';  




@Component({

  selector: 'article',

  

  template: `
    
    
  <div *ngIf="item" >
      <h2>Ficha:   </h2>
      <div><label>id: </label>{{item.id}}</div>
      <div><label >Tipo: {{item.tipoVia}}</label></div>
      <div><label >Nombre: {{item.nombreVia}}</label></div>
      <div><label >Distrito: {{item.distrito}}</label></div>
      <div><label >Sección: {{item.seccion}}</label></div>
      <div><label >C.P.: {{item.codigoPostal}} </label></div>
    </div>
   
      
     
   
    `

})

 

export class ArticleComponent  implements OnInit, OnDestroy{



  item: Via;
  subscription:Subscription;

constructor(private _navService:NavService) {}

  ngOnInit() {
    this.subscription = this._navService.navItem$.subscribe(
      item => this.item = item);
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }


 
  }




