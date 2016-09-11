import { RouterModule, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { _404Component } from './_404/_404.component';
import { SupportComponent } from './support/support.component';
import { WizardComponent } from './wizard/wizard.component';
import { CanDeactivateGuard } from './modal/can-deactivate-guard.service';
import { ModalService } from './modal/modal.service';
import { LoginComponent } from './login.component';
import { LoginGuard} from './services/login.guard.service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'wizard',
        component: WizardComponent
    },
    {
        path: 'Auth/:id',
        component: LoginComponent,
        canDeactivate: [LoginGuard]
    },
    {
        path: 'support',
        component: SupportComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        canDeactivate: [CanDeactivateGuard]
    },
    {
        path: '**',
        component: _404Component
    }
];
export const appRoutingProviders: any[] = [
    ModalService,
    CanDeactivateGuard
];
export const routing = RouterModule.forRoot(appRoutes);