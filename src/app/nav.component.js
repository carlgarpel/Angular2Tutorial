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
var via_service_1 = require('./via.service');
var VIAS = [
    { id: 10, tipoVia: 'CALLE', nombreVia: 'ALTAMIRA', distrito: 7, seccion: 1, codigoPostal: '04006' },
    { id: 11, tipoVia: 'CALLE', nombreVia: 'BECERRA', distrito: 8, seccion: 6, codigoPostal: '04006' },
    { id: 12, tipoVia: 'CALLE', nombreVia: 'CARRERA DEL DARRO', distrito: 7, seccion: 3, codigoPostal: '04005' },
    { id: 13, tipoVia: 'CALLE', nombreVia: 'DINAMARCA', distrito: 7, seccion: 9, codigoPostal: '04005' },
    { id: 14, tipoVia: 'AVDA', nombreVia: 'FRANCISCO DE ASÍS', distrito: 7, seccion: 5, codigoPostal: '04003' },
    { id: 15, tipoVia: 'AVDA', nombreVia: 'JUAN', distrito: 7, seccion: 5, codigoPostal: '04003' }
];
var NavComponent = (function () {
    function NavComponent(service) {
        this.service = service;
        this.cvias = VIAS;
    }
    NavComponent.prototype.onSelect = function (via) {
        this.selectedVia = via;
        this.service.setViaSeleccionada(via);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav',
            providers: [via_service_1.ViaSeleccionada],
            template: "\n    \n    \n     \n        <label>Listado de v\u00EDas: </label>\n        <ul class=\"vias\">\n          <li *ngFor=\"let via of cvias\"\n             [class.selected]=\"via === selectedVia\"\n             (click)=\"onSelect(via)\">\n                <span class=\"badge\">{{via.id}} </span> {{via.nombreVia}}\n         </li>\n        </ul>\n     \n   \n    "
        }), 
        __metadata('design:paramtypes', [via_service_1.ViaSeleccionada])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map