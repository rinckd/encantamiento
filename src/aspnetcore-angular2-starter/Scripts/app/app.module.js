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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var login_component_1 = require('./login.component');
var _404_component_1 = require('./_404/_404.component');
var support_component_1 = require('./support/support.component');
var wizard_component_1 = require('./wizard/wizard.component');
var data_service_1 = require('./services/data.service');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routes_1.routing
            ],
            declarations: [
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                _404_component_1._404Component,
                support_component_1.SupportComponent,
                wizard_component_1.WizardComponent
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                data_service_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map