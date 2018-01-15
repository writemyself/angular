import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {

	constructor(public loggerService: LoggerService) { }

	getProduct(): Product {
		this.loggerService.log("一个服务");
		return new Product(0, "iphone X", 10000, "这是iphone X")
	}

}
export class Product {
	constructor(
		public id: number,
		public title: string,
		public price: number,
		public desc: string
	) { }
}
