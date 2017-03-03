import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { Via } from './via';

import {NavService}   from './nav.service';  



@Component({

  selector: 'header',

  template: `

  <h1> {{title}}</h1>
  <div *ngIf="item" >
  	 <div>
  	 	<label>id: </label>{{item.id}}
 		<label>Via: </label>{{item.tipoVia}}
 		<label> </label>{{item.nombreVia}}
   </div>
  </div>
  `

})

export class HeaderComponent implements OnInit, OnDestroy{

  title='Callejero de Almería';

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