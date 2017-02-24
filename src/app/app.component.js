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
var Via = (function () {
    function Via() {
    }
    return Via;
}());
exports.Via = Via;
var VIAS = [
    { id: 10, tipoVia: 'CALLE', nombreVia: 'ALTAMIRA', distrito: 7, seccion: 1, codigoPostal: '04006' },
    { id: 11, tipoVia: 'CALLE', nombreVia: 'BECERRA', distrito: 8, seccion: 6, codigoPostal: '04006' },
    { id: 12, tipoVia: 'CALLE', nombreVia: 'CARRERA DEL DARRO', distrito: 7, seccion: 3, codigoPostal: '04005' },
    { id: 13, tipoVia: 'CALLE', nombreVia: 'DINAMARCA', distrito: 7, seccion: 9, codigoPostal: '04005' },
    { id: 14, tipoVia: 'AVDA', nombreVia: 'FRANCISCO DE ASÍS', distrito: 7, seccion: 5, codigoPostal: '04003' },
    { id: 15, tipoVia: 'AVDA', nombreVia: 'FRANCISCO DE ASÍS', distrito: 7, seccion: 5, codigoPostal: '04003' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Callejeros';
        this.cvias = VIAS;
    }
    AppComponent.prototype.onSelect = function (via) {
        this.selectedVia = via;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header><h1>{{title}}</h1></header>\n    <div id='main'>\n      <article  *ngIf=\"selectedVia\">\n        <h2>C\u00F3digo: </h2>\n        <div  class=\"article\"><label>Tipo de v\u00EDa: </label>{{selectedVia.tipoVia}} </div>\n        <div  class=\"article\"><label>Nombre de v\u00EDa: </label>{{selectedVia.nombreVia}} </div>\n        <div> <label>Distrito: </label>{{selectedVia.distrito}} </div>\n        <div> <label>Secci\u00F3n: </label>{{selectedVia.seccion}} </div>\n        <div> <label>C\u00F3digo Postal: </label>{{selectedVia.codigoPostal}} </div>\n      </article>\n\n      <nav> \n        <label>Listado de v\u00EDas: </label>\n        <ul class=\"vias\">\n          <li *ngFor=\"let via of cvias\"\n             [class.selected]=\"via === selectedVia\"\n             (click)=\"onSelect(via)\">\n                <span class=\"badge\">{{via.id}} </span> {{via.nombreVia}}\n         </li>\n    </ul>\n        \n      </nav>\n     <aside *ngIf=\"selectedVia\">Edite el nombre de v\u00EDa:\n\n          <h2>{{selectedVia.nombreVia}}</h2>\n          <div><label>id: </label>{{selectedVia.id}}</div>\n          <div>\n            <label>nombre: </label>\n            <input [(ngModel)]=\"selectedVia.nombreVia\" placeholder=\"via\"/>\n          </div>\n\n     </aside>\n    </div>\n\n     <footer>Vial - 2017</footer>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map