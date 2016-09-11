import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'home',
    template: '<h1 class="home">RL was not found</h1>',
    styles: ['.home {background: yellow}'],
    directives: [ROUTER_DIRECTIVES]
})
export class _404Component implements OnInit{

    ngOnInit() {
        console.log('help');
        this._router.events.subscribe(() => {
            console.log(this._router.url);
        });

    }
    constructor(private _router: Router) {
    }
}