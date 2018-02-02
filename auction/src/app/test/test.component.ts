import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { TestChildComponent } from '../test-child/test-child.component'
import { count } from 'rxjs/operator/count';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
//使用ViewChild装饰器导入这个引用，并挂上AfterViewInit生命周期钩子
export class TestComponent implements AfterViewInit {

    @ViewChild(TestChildComponent)
    private testChildComponent: TestChildComponent;

    title: string;
    titleB: string;
    value:string;

    count():number{
        return 0;
    }
    constructor() { }

    doOnClick(e) {
        console.log("111");
    }

    onDoKeyUp(value:string) {
        this.title = value;
    }

    onDoKeyUpB(value:string) {
        this.titleB = value;
    }
    doOnValue(e:string){
        this.value = e;
    }
    addCount(){
        this.testChildComponent.addCount();
    }
    ngAfterViewInit() {
        this.count = () => this.testChildComponent.count;
        this.count();
    }

}
