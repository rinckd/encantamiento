import { Injectable, Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { CanDeactivate, Router } from '@angular/router';

@Component({
    selector: 'about',
    template: `<div>{{ message }}</div>`,
    directives: [CORE_DIRECTIVES]
})

@Injectable()
export class WizardComponent implements OnInit {
    public message: string;

    constructor(private _router:Router) {
        this.message = "Hello from About";
    }

    ngOnInit() {

    }
}
