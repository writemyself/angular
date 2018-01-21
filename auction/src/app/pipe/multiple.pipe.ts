import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
        return value;
    }
    return value * args;
  }

}
