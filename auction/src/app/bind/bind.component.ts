import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bind',
    templateUrl: './bind.component.html',
    styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

    constructor() { }
    
    doOnclick(event: any) {
        console.log(event);
    }
    ngOnInit() {
    }

}
