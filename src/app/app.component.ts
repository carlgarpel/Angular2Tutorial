import { Component } from '@angular/core';
export class Vias {
  id: number;
  tipoVia: string;
  nombreVia: string;
}
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Código: {{via.id}}</h2>
    <div><label>Tipo de vía: </label>{{via.tipoVia}}</div>
    <div><label>Nombre de vía: </label>{{via.nombreVia}}</div>
    <div>
    <br/>
      <label>Edición del Nombre de vía: </label>
      <input  [(ngModel)]="via.nombreVia" placeholder="via">
    </div>
    `
})
export class AppComponent {
  title = 'Callejero';
  via: Vias = {
    id: 1,
    tipoVia: 'CALLE',
    nombreVia: 'ALTAMIRA'
  };
}
