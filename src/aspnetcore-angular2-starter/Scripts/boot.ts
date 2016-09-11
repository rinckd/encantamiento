import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app/app.component';
import { Configuration } from './app/app.constants';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if ('production' === process.env.ENV) {
    enableProdMode();
}
console.log(process.env.ENV);

platformBrowserDynamic().bootstrapModule(AppModule);