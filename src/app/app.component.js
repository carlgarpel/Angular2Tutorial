"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Vias = (function () {
    function Vias() {
    }
    return Vias;
}());
exports.Vias = Vias;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Callejero';
        this.via = {
            id: 1,
            tipoVia: 'CALLE',
            nombreVia: 'ALTAMIRA'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header><h1>{{title}}</h1></header>\n    <div id='main'>\n      <article>\n        <h2>C\u00F3digo: {{via.id}}</h2>\n        <div  class=\"article\"><label>Tipo de v\u00EDa: </label>{{via.tipoVia}}</div>\n        <div> <label>Nombre de v\u00EDa: </label>{{via.nombreVia}} </div>\n      </article>\n\n      <nav> \n        <label>Edici\u00F3n del Nombre de v\u00EDa: </label>\n        <input  [(ngModel)]=\"via.nombreVia\" placeholder=\"via\">\n      </nav>\n      <aside>Localizador</aside>\n\n    </div>\n\n     <footer>Vial - 2017</footer>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map