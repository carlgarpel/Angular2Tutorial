import { Component } from '@angular/core';


@Component({

  selector: 'footer',

  template: `

  <h3>Fecha: {{today | date:'dd/MM/yyyy'}}</h3> 

  `

})

export class FooterComponent {

today: number = Date.now();

}