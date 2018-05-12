import { Component, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component"
@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{

    constructor() { }
    @ViewChild(ChildComponent)
    private childComponent: ChildComponent;

    ngOnInit() {
    }
    counter:number;
    ngAfterViewInit(){
        this.counter = this.childComponent.count;
    }
    add(){
        this.childComponent.add();
        this.counter = this.childComponent.count;
        
    }
}