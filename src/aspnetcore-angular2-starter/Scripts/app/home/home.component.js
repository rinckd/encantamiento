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
var data_service_1 = require('../services/data.service');
var tones_1 = require('../tones');
var HomeComponent = (function () {
    function HomeComponent(_dataService) {
        this._dataService = _dataService;
        this.currentSeal = tones_1.Seal[4];
        this._date = new Date;
        this.locale = "en-us";
        this.month = this._date.toLocaleString(this.locale, { month: "long" });
        this.message = "Hello from HomeComponent constructor";
        this.theTzolkin = new Array();
        this.theTzolkin.push(new tones_1.Day(260, [13, 0]));
        for (var i = 1; i <= 259; i++) {
            this.theTzolkin.push(new tones_1.Day(i, [((i - 1) % 13) + 1, i % 20]));
        }
        console.log(this.theTzolkin);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentSeal = tones_1.Seals[4];
        console.log(this.currentSeal);
        this._dataService
            .GetAll()
            .subscribe(function (data) { return _this.values = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'homecomponent',
            template: require('./home.component.html'),
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map