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
var core_2 = require('@angular/core');
var via_seleccionada_1 = require('./via-seleccionada');
var ArticleComponent = (function () {
    function ArticleComponent(service) {
        this.service = service;
        this.selectedVia = this.service.getVia();
    }
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'article',
            providers: [via_seleccionada_1.ViaSeleccionada],
            template: "\n    \n    \n  <div >\n      <h2>Ficha: {{selectedVia.nombreVia}} </h2>\n      <div><label>id: </label>{{selectedVia.id}}</div>\n      <div>\n        <label>Nombre: </label>\n        <input [(ngModel)]=\"selectedVia.nombreVia\" placeholder=\"name\"/>\n      </div>\n    </div>\n   \n      \n     \n   \n    "
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [via_seleccionada_1.ViaSeleccionada])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map