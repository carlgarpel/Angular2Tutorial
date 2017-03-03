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
var nav_service_1 = require('./nav.service');
var ArticleComponent = (function () {
    function ArticleComponent(_navService) {
        this._navService = _navService;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._navService.navItem$.subscribe(function (item) { return _this.item = item; });
    };
    ArticleComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'article',
            template: "\n    \n    \n  <div *ngIf=\"item\" >\n      <h2>Ficha:   </h2>\n      <div><label>id: </label>{{item.id}}</div>\n      <div><label >Tipo: {{item.tipoVia}}</label></div>\n      <div><label >Nombre: {{item.nombreVia}}</label></div>\n      <div><label >Distrito: {{item.distrito}}</label></div>\n      <div><label >Secci\u00F3n: {{item.seccion}}</label></div>\n      <div><label >C.P.: {{item.codigoPostal}} </label></div>\n    </div>\n   \n      \n     \n   \n    "
        }), 
        __metadata('design:paramtypes', [nav_service_1.NavService])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map