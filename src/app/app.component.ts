import { Component } from '@angular/core';
export class Vias {
  id: number;
  tipoVia: string;
  nombreVia: string;
}
@Component({
  selector: 'my-app',
  template: `
    <header><h1>{{title}}</h1></header>
    <div id='main'>
      <article>
        <h2>Código: {{via.id}}</h2>
        <div  class="article"><label>Tipo de vía: </label>{{via.tipoVia}}</div>
        <div> <label>Nombre de vía: </label>{{via.nombreVia}} </div>
      </article>

      <nav> 
        <label>Edición del Nombre de vía: </label>
        <input  [(ngModel)]="via.nombreVia" placeholder="via">
      </nav>
      <aside>Localizador</aside>

    </div>

     <footer>Vial - 2017</footer>

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
