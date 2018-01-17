import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  // 产品数组
  private products: Product[];
  
  // 图片地址
  private imgUrl: string = 'http://placehold.it/800x300';

  // 组件实例化后会被调用一次，用来初始化数据
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
