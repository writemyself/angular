import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 产品数组
  private products: Array<Product>;
  // 图片地址
  private imgUrl: string = 'http://placehold.it/800x300';
  constructor() { }

  // 组件实例化后会被调用一次，用来初始化数据
  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",10,1,"第一个商品的描述",["商品类别1","商品类别2"]),
      new Product(2,"第一个商品",20,2,"第二个商品的描述",["商品类别1","商品类别2"]),
      new Product(3,"第一个商品",30,3,"第三个商品的描述",["商品类别1","商品类别2"]),
      new Product(4,"第一个商品",40,4,"第四个商品的描述",["商品类别1","商品类别2"]),
      new Product(5,"第一个商品",60,3,"第五个商品的描述",["商品类别1","商品类别2"]),
      new Product(6,"第一个商品",60,2,"第六个商品的描述",["商品类别1","商品类别2"])
    ];
    console.log(new Product(6,"第一个商品",60,2,"第六个商品的描述",["商品类别1","商品类别2"]));
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
  ) {

  }
}
