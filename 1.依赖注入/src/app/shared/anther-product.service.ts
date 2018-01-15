import { ProductService, Product } from './product.service';
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class AntherProductService implements ProductService {

  constructor(public loggerService:LoggerService) { }

	getProduct(): Product {
    this.loggerService.log("另一个服务");
		return new Product(1,"iphone 8",8000,"这是iphone 8");
	}


}
