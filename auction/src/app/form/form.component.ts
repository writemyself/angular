import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    constructor() { }
    values_1:string = "";
    values_2:string = "";
    ngOnInit() {
    }
    doKeyUp_1(event:KeyboardEvent) {
        this.values_1 += (<HTMLInputElement>event.target).value + ' | ';
    }
    doKeyUp_2(value:string) {
        this.values_2 += value + ' | ';
    }
}
