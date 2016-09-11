import {OnInit, Component} from '@angular/core';

import {ConfirmService} from "./confirm.service";

const keyEsc = 27;

@Component({
    selector: 'modal-confirm',
    template: 
    `<div id="confirmationModal" class="dialog-container">
        <div class="mdl-card mdl-shadow--16dp">
            <h5>{{title}}</h5>
            <p>{{message}}</p>
            <div class="mdl-card__actions dialog-button-bar">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="cancelButton"
                        data-upgraded=",MaterialButton,MaterialRipple">{{cancelText}}<span
                        class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span>
                </button>
                <button class="mdl-button mdl-button--accent mdl-button--raised mdl-js-button mdl-js-ripple-effect"
                        id="okButton" data-upgraded=",MaterialButton,MaterialRipple">{{okText}}<span
                        class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span>
                </button>
            </div>
        </div>
    </div>`,
    styles: [
    `.dialog-container,
    .loading - container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: scroll;
        background: rgba(0, 0, 0, 0.4);
        z-index: -1;
        opacity: 0;
        -webkit - transition: opacity 400ms ease-in;
        -moz - transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
    }

    .dialog - container > div {
        position: relative;
        width: 90 %;
        max - width: 500px;
        min - height: 25px;
        margin: 10 % auto;
        z - index: 99999;
        padding: 16px 16px 0;
    }

    .dialog - button - bar {
        text - align: right;
        margin - top: 8px;
    }

    .loading - container > div {
        position: relative;
        width: 50px;
        height: 50px;
        margin: 10 % auto;
        z - index: 99999;
    }

    .loading - container > div > div {
        width: 100 %;
        height: 100 %;
    }

    .dialog - container.dialog - button - bar button {
        margin: 0 0 0 1em;
    }
    `]
})
export class ConfirmComponent implements OnInit {

    private _defaults = {
        title: 'Confirmation',
        message: 'Do you want to cancel your changes?',
        cancelText: 'Cancel',
        okText: 'OK'
    };
    title: string;
    message: string;
    okText: string;
    cancelText: string;

    private _confirmElement: any;
    private _cancelButton: any;
    private _okButton: any;

    constructor(confirmService: ConfirmService) {
        confirmService.activate = this.activate.bind(this);
    }

    _setLabels(message = this._defaults.message, title = this._defaults.title) {
        this.title = title;
        this.message = message;
        this.okText = this._defaults.okText;
        this.cancelText = this._defaults.cancelText;
    }

    activate(message = this._defaults.message, title = this._defaults.title) {
        this._setLabels(message, title);

        let promise = new Promise<boolean>(resolve => {
            this._show(resolve);
        });
        return promise;
    }

    private _show(resolve: (boolean) => any) {
        document.onkeyup = null;

        let negativeOnClick = (e: any) => resolve(false);
        let positiveOnClick = (e: any) => resolve(true);

        if (!this._confirmElement || !this._cancelButton || !this._okButton) return;

        this._confirmElement.style.opacity = 0;
        this._confirmElement.style.zIndex = 9999;

        this._cancelButton.onclick = ((e: any) => {
            e.preventDefault();
            if (!negativeOnClick(e)) this._hideDialog();
        })

        this._okButton.onclick = ((e: any) => {
            e.preventDefault();
            if (!positiveOnClick(e)) this._hideDialog();
        });

        this._confirmElement.onclick = () => {
            this._hideDialog();
            return negativeOnClick(null);
        };

        document.onkeyup = (e: any) => {
            if (e.which === keyEsc) {
                this._hideDialog();
                return negativeOnClick(null);
            }
        };

        this._confirmElement.style.opacity = 1;
    }

    private _hideDialog() {
        document.onkeyup = null;
        this._confirmElement.style.opacity = 0;
        window.setTimeout(() => this._confirmElement.style.zIndex = -1, 400);
    }

    ngOnInit(): any {
        this._confirmElement = document.getElementById('confirmationModal');
        this._cancelButton = document.getElementById('cancelButton');
        this._okButton = document.getElementById('okButton');
    }
}
