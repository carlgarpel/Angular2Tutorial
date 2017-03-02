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
//<div  *ngIf="via">
var FichaViaComponent = (function () {
    function FichaViaComponent(service) {
        this.service = service;
    }
    FichaViaComponent.prototype.ngOnInit = function () {
        this.selectedVia = this.service.getViaSeleccionada();
        console.log(this.selectedVia.nombreVia);
    };
    FichaViaComponent = __decorate([
        core_1.Component({
            selector: 'article',
            providers: [via_service_1.ViaSeleccionada],
            template: "\n\n   <div >\n\n        <h2>C\u00F3digo: </h2>\n\n        <div  class=\"article\"><label>Tipo de v\u00EDa: </label>{{selectedVia.tipoVia}} </div>\n\n        <div  class=\"article\"><label>Nombre de v\u00EDa: </label>{{selectedVia.nombreVia}} </div>\n\n        <div> <label>Distrito: </label>{{selectedVia.distrito}} </div>\n\n        <div> <label>Secci\u00F3n: </label>{{selectedVia.seccion}} </div>\n\n        <div> <label>C\u00F3digo Postal: </label>{{selectedVia.codigoPostal}} </div>\n\n     </div>\n\n    \n\n  "
        }), 
        __metadata('design:paramtypes', [via_service_1.ViaSeleccionada])
    ], FichaViaComponent);
    return FichaViaComponent;
}());
exports.FichaViaComponent = FichaViaComponent;
//# sourceMappingURL=ficha-via.component.js.map