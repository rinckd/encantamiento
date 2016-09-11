import {Component} from '@angular/core';


@Component({
    selector: 'qs-navbar',
    styles: [
        require('./navbar.component.scss'),
        require('../../style/sass/styles.scss')
    ],
    template: require('./navbar.component.html')
})

export class NavbarComponent { }
