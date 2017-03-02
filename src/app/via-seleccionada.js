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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var ViaSeleccionada = (function () {
    function ViaSeleccionada() {
        this.item = new BehaviorSubject_1.BehaviorSubject({ id: 200, tipoVia: 'AVDA', nombreVia: 'ESTE', distrito: 7, seccion: 5, codigoPostal: '04003' });
        this.viaSeleccionada$ = this.item.asObservable();
    }
    ViaSeleccionada.prototype.addVia = function (via) {
        this.item.next(via);
        console.log('addVia invocado ' + via.nombreVia + ' ' + via.id);
    };
    ViaSeleccionada = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ViaSeleccionada);
    return ViaSeleccionada;
}());
exports.ViaSeleccionada = ViaSeleccionada;
//# sourceMappingURL=via-seleccionada.js.map