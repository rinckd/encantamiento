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
var router_1 = require('@angular/router');
var _404Component = (function () {
    function _404Component(_router) {
        this._router = _router;
    }
    _404Component.prototype.ngOnInit = function () {
        var _this = this;
        console.log('help');
        this._router.events.subscribe(function () {
            console.log(_this._router.url);
        });
    };
    _404Component = __decorate([
        core_1.Component({
            selector: 'home',
            template: '<h1 class="home">RL was not found</h1>',
            styles: ['.home {background: yellow}'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], _404Component);
    return _404Component;
}());
exports._404Component = _404Component;
//# sourceMappingURL=_404.component.js.map