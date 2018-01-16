import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    constructor() { }
    private products: Product[] = [
    new Product(1,"第一个商品",10,1,"第一个商品的描述",["商品类别1","商品类别2"]),
    new Product(2,"第一个商品",20,2,"第二个商品的描述",["商品类别1","商品类别2"]),
    new Product(3,"第一个商品",30,3,"第三个商品的描述",["商品类别1","商品类别2"]),
    new Product(4,"第一个商品",40,4,"第四个商品的描述",["商品类别1","商品类别2"]),
    new Product(5,"第一个商品",60,3,"第五个商品的描述",["商品类别1","商品类别2"]),
    new Product(6,"第一个商品",60,2,"第六个商品的描述",["商品类别1","商品类别2"])
  ];

  private comments:Comment[] = [
    new Comment(1,1,"2017-01-16","xiaosong",3,"这是商品注释1"),
    new Comment(2,1,"2017-02-16","xiaosong",4,"这是商品注释2"),
    new Comment(3,1,"2017-03-16","xiaosong",5,"这是商品注释3"),
    new Comment(4,2,"2017-04-16","xiaosong",5,"这是商品注释4")
  ];


  //获取商品
  getProducts(){
    return this.products;
  };
  //获取传入id相同的商品
  getProduct(id:number): Product{
    return this.products.find((product) => product.id == id);
  }
  //
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment)=> comment.productId == id);
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
export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user: string,
    public rating: number,
    public content: string
  ){}
}
