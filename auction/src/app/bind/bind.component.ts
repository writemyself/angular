import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bind',
    templateUrl: './bind.component.html',
    styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

    constructor() { }
    private classStyle: string;
    doOnclick(event: any) {
        console.log(event);
        this.classStyle = "blue size";
    }
    ngOnInit() {
    }
}
