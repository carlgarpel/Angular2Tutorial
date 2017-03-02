import { Component, OnInit, OnDestroy } from '@angular/core';

import { Via } from './via';
import {Injectable} from '@angular/core';
import { ViaSeleccionada } from './via-seleccionada';
import {Subscription} from 'rxjs/Subscription';
import  { NavComponent} from './nav.component';



@Component({

  selector: 'article',

  providers: [ViaSeleccionada, NavComponent],

  template: `
    
    
  <div >
      <h2>Ficha:   </h2>
      <div><label>id: </label>{{item.id}}</div>
      <div>
        <label >Nombre: {{item.nombreVia}}</label>
      <!-- <input [(ngModel)]="item.nombreVia" placeholder="name"/> -->
      </div>
    </div>
   
      
     
   
    `

})

 

export class ArticleComponent  implements OnInit, OnDestroy{



  item: Via;
  subscription:Subscription;

constructor(private service: ViaSeleccionada) {}

   ngOnInit () {
     this.subscription= this.service.viaSeleccionada$.subscribe(item => this.item = item)


 }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }


 
  }

