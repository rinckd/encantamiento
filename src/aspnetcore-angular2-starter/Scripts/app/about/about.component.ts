import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ModalService } from '../modal/modal.service';
import { Modal } from '../modal/modal.component';


@Component({
    selector: 'about',
    template: require('./about.component.html'),
    providers: [ModalService],
    directives: [CORE_DIRECTIVES, Modal]
})

export class AboutComponent implements OnInit {

    public message: string;
    private MODAL_DEMO_ID: string;
    constructor(private modalService: ModalService) {
        this.MODAL_DEMO_ID = 'someUniqueName';
        this.message = "Hello from About";
    }

    ngOnInit() {
       
    }
    doTheThing() {
        this.modalService.close(this.MODAL_DEMO_ID);
        console.log('hello!');
    }

    canDeactivate() {
        return window.confirm("You have unsaved changes. Still want to leave?");
    }
}
