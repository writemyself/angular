import { ProductService, Product } from './product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AntherProductService implements ProductService {
	getProduct(): Product {
		return new Product(1,"iphone 8",8000,"这是iphone 8");
	}
	constructor() { }

}
