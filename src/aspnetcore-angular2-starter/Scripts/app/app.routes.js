"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var _404_component_1 = require('./_404/_404.component');
var support_component_1 = require('./support/support.component');
var wizard_component_1 = require('./wizard/wizard.component');
var can_deactivate_guard_service_1 = require('./modal/can-deactivate-guard.service');
var modal_service_1 = require('./modal/modal.service');
var login_component_1 = require('./login.component');
var login_guard_service_1 = require('./services/login.guard.service');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'wizard',
        component: wizard_component_1.WizardComponent
    },
    {
        path: 'Auth/:id',
        component: login_component_1.LoginComponent,
        canDeactivate: [login_guard_service_1.LoginGuard]
    },
    {
        path: 'support',
        component: support_component_1.SupportComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard]
    },
    {
        path: '**',
        component: _404_component_1._404Component
    }
];
exports.appRoutingProviders = [
    modal_service_1.ModalService,
    can_deactivate_guard_service_1.CanDeactivateGuard
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map