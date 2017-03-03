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
var nav_component_1 = require('./nav.component');
var nav_service_1 = require('./nav.service');
var AsideComponent = (function () {
    function AsideComponent(_navService) {
        this._navService = _navService;
    }
    AsideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._navService.navItem$.subscribe(function (item) { return _this.item = item; });
    };
    AsideComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    AsideComponent = __decorate([
        core_1.Component({
            selector: 'aside',
            providers: [nav_component_1.NavComponent],
            template: "\n    \n    \n  <div *ngIf=\"item\" >\n      <h2>Editar:   </h2>\n      <div><label>id: </label>{{item.id}}</div>\n      <div><input [(ngModel)]=\"item.tipoVia\" placeholder=\"tipo via\"/></div>\n      <div><input [(ngModel)]=\"item.nombreVia\" placeholder=\"nombre via\"/></div>\n      <div><input [(ngModel)]=\"item.distrito\" placeholder=\"distrito\"/></div>\n      <div><input [(ngModel)]=\"item.seccion\" placeholder=\"seccion\"/></div>\n      <div><input [(ngModel)]=\"item.codigoPostal\" placeholder=\"C.P.\"/></div>\n    </div>\n   \n      \n     \n   \n    "
        }), 
        __metadata('design:paramtypes', [nav_service_1.NavService])
    ], AsideComponent);
    return AsideComponent;
}());
exports.AsideComponent = AsideComponent;
//# sourceMappingURL=aside.component.js.map