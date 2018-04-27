import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
//子组件与父组件之间相互通讯
import { EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-test-child',
    templateUrl: './test-child.component.html',
    styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
    constructor() {};

    @Input() title:string;

    @Input() titleB:string;

    //相当于自己定义了一个onValue事件在父组件中利用事件的$event达到传值的目的
    @Output() onValue:EventEmitter<string> = new EventEmitter();

    count:number = 0;

    addCount(){
        this.count++;
    };

    doKeyup(value:string){
        this.onValue.emit(value);
    };

    ngOnInit() {
    };

    ngOnChanges(changes: SimpleChange){
        console.log(changes);
    };
}
