import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    constructor() { }

    setCookie(name:string,value:any,time?:number){
        let cookie = name + "=" + encodeURIComponent(value);
        if(!time){
            cookie += "; max-age=" + time;
        }
        document.cookie = cookie;
    };

    getCookie( key:string ){
        let all = document.cookie;
        if (all === "") {
            return null;
        }
        let list = all.split("; ");


        for (var i = 0; i < list.length; i++) {
            var singleCookie = list[i];
            var p = singleCookie.indexOf("=");
            var name = singleCookie.substring(0, p);
            var value = singleCookie.substring(p + 1);
            value = decodeURIComponent(value);
            if (key && key == name) {
                return value;
            }
        }
        return null;
    }
}
