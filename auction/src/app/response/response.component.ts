import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms'


@Component({
    selector: 'app-response',
    templateUrl: './response.component.html',
    styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
    searchInput: FormControl = new FormControl();
    constructor() {
        Observable.from([1, 2, 3, 4])
            .filter(e => e % 2 === 0)
            .map(e => e * e)
            .subscribe(
            e => console.log(e),
            err => console.error(err),
            () => console.log("is end")
            );
        //响应式编程实现监听输入
        this.searchInput.valueChanges
        .debounceTime(500)
        .subscribe(
            stockCode => this.getStockInfo(stockCode)
        )

    }
    onKey(value:string) {
        console.log(value);
    }
    getStockInfo(value:string){
        console.log(value);
    }
    ngOnInit() {
    }

}
