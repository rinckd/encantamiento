import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MDL } from './materialdesign.service';
   

@Component({
    selector: 'qs-app',
    template: require('./app.component.html'),
    styles: [
        require('./app.component.scss'),
        require('../style/sass/styles.scss')
    ],
    encapsulation: ViewEncapsulation.None,
    directives: [
        MDL,
        NavbarComponent
    ]
})


export class AppComponent {
}