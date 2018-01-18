import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bind',
    templateUrl: './bind.component.html',
    styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

    constructor() { }
    imgUrl:string = "http://placehold.it/400x220"
    doOnclick(event:any){
        console.log(event);
    }
    ngOnInit() {

    }

}
