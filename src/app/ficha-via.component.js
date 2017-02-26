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
var via_1 = require('./via');
var FichaViaComponent = (function () {
    function FichaViaComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', via_1.Via)
    ], FichaViaComponent.prototype, "via", void 0);
    FichaViaComponent = __decorate([
        core_1.Component({
            selector: 'mi-via-ficha',
            template: "\n\n    <article  *ngIf=\"via\">\n\n        <h2>C\u00F3digo: </h2>\n\n        <div  class=\"article\"><label>Tipo de v\u00EDa: </label>{{via.tipoVia}} </div>\n\n        <div  class=\"article\"><label>Nombre de v\u00EDa: </label>{{via.nombreVia}} </div>\n\n        <div> <label>Distrito: </label>{{via.distrito}} </div>\n\n        <div> <label>Secci\u00F3n: </label>{{via.seccion}} </div>\n\n        <div> <label>C\u00F3digo Postal: </label>{{via.codigoPostal}} </div>\n\n    </article>\n\n    <aside *ngIf=\"via\">Edite el nombre de v\u00EDa:\n\n\n\n          <h2>{{via.nombreVia}}</h2>\n\n          <div><label>id: </label>{{via.id}}</div>\n\n          <div>\n\n            <label>nombre: </label>\n\n            <input [(ngModel)]=\"via.nombreVia\" placeholder=\"via\"/>\n\n          </div>\n\n\n\n    </aside>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FichaViaComponent);
    return FichaViaComponent;
}());
exports.FichaViaComponent = FichaViaComponent;
//# sourceMappingURL=ficha-via.component.js.map