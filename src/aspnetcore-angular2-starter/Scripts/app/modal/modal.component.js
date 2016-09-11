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
var modal_service_1 = require('./modal.service');
var Modal = (function () {
    function Modal(modalService) {
        this.modalService = modalService;
        this.modalId = '';
        this.modalTitle = '';
        this.blocking = false;
        this.isOpen = false;
    }
    Modal.prototype.ngOnInit = function () {
        this.modalService.registerModal(this);
    };
    Modal.prototype.close = function (checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        this.modalService.close(this.modalId, checkBlocking);
    };
    Modal.prototype.keyup = function (event) {
        if (event.keyCode === 27) {
            this.modalService.close(this.modalId, true);
        }
    };
    __decorate([
        core_1.Input('modal-id'), 
        __metadata('design:type', Object)
    ], Modal.prototype, "modalId", void 0);
    __decorate([
        core_1.Input('modal-title'), 
        __metadata('design:type', Object)
    ], Modal.prototype, "modalTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Modal.prototype, "blocking", void 0);
    Modal = __decorate([
        core_1.Component({
            selector: 'tb-modal',
            template: require('./modal.component.html'),
            host: { '(document:keyup)': 'keyup($event)' }
        }), 
        __metadata('design:paramtypes', [modal_service_1.ModalService])
    ], Modal);
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.component.js.map