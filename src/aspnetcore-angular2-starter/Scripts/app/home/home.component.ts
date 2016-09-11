import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { DataService } from '../services/data.service';
import { Tones, Seals, Seal, Day } from '../tones';


@Component({
    selector: 'homecomponent',
    template: require('./home.component.html'),
    providers: [DataService]
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];
    public _date: Date;
    public locale: string;
    public month: string;
    public currentSeal: Seal;
    public theTzolkin: Day[];
    constructor(private _dataService: DataService) {
        this.currentSeal = Seal[4];
        this._date = new Date;
        this.locale = "en-us";
        this.month = this._date.toLocaleString(this.locale, { month: "long" });
        this.message = "Hello from HomeComponent constructor";
        this.theTzolkin = new Array();
        //this.theTzolkin.push(new Day(260, [13, 0]));
        for (var i = 1; i <= 260; i++) {
            this.theTzolkin.push(new Day(i, [((i - 1) % 13) + 1, i % 20]));
        }
        
        let tone = 11;
        let seal = 19;

        console.log(this.theTzolkin);

    }

    ngOnInit() {

        this.currentSeal = Seals[4];
        console.log(this.currentSeal);
        this._dataService
            .GetAll()
            .subscribe(data => this.values = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}
