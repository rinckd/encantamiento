import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { routing, appRoutingProviders } from './app.routes';

import { ModalService } from './modal/modal.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login.component';
import { _404Component } from './_404/_404.component';
import { SupportComponent } from './support/support.component';
import { WizardComponent } from './wizard/wizard.component';
import { CanDeactivateGuard } from './modal/can-deactivate-guard.service';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        HomeComponent,
        LoginComponent,
        AppComponent,
        AboutComponent,
        _404Component,
        SupportComponent,
        WizardComponent
    ],
    providers: [
        appRoutingProviders,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

