import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'qs-support',
    template: require('./support.component.html'),
    directives: [CORE_DIRECTIVES]
})

export class SupportComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = "There is no support.";
    }

    ngOnInit() {

    }
}
