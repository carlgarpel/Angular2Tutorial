import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { Via } from './via';
import  { NavComponent } from './nav.component';
import {NavService}   from './nav.service';  



@Component({

  selector: 'aside',

  providers: [NavComponent],

  template: `
    
    
  <div *ngIf="item" >
      <h2>Editar:   </h2>
      <div><label>id: </label>{{item.id}}</div>
      <div><input [(ngModel)]="item.tipoVia" placeholder="tipo via"/></div>
      <div><input [(ngModel)]="item.nombreVia" placeholder="nombre via"/></div>
      <div><input [(ngModel)]="item.distrito" placeholder="distrito"/></div>
      <div><input [(ngModel)]="item.seccion" placeholder="seccion"/></div>
      <div><input [(ngModel)]="item.codigoPostal" placeholder="C.P."/></div>
    </div>
   
      
     
   
    `

})

 

export class AsideComponent  implements OnInit, OnDestroy{



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
