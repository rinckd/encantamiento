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
var common_1 = require('@angular/common');
var modal_service_1 = require('../modal/modal.service');
var modal_component_1 = require('../modal/modal.component');
var AboutComponent = (function () {
    function AboutComponent(modalService) {
        this.modalService = modalService;
        this.MODAL_DEMO_ID = 'someUniqueName';
        this.message = "Hello from About";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.doTheThing = function () {
        this.modalService.close(this.MODAL_DEMO_ID);
        console.log('hello!');
    };
    AboutComponent.prototype.canDeactivate = function () {
        return window.confirm("You have unsaved changes. Still want to leave?");
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: require('./about.component.html'),
            providers: [modal_service_1.ModalService],
            directives: [common_1.CORE_DIRECTIVES, modal_component_1.Modal]
        }), 
        __metadata('design:paramtypes', [modal_service_1.ModalService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map