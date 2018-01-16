import { ProductService, Comment } from './../service/product/product.service';
import { Product } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  comments:Comment[];
  constructor(
    private routerInfo: ActivatedRoute, //注入路由服务
    private productService : ProductService //注入商品服务
  ) { }

  ngOnInit() {
    //使用路由提供的方法来获取商品id
    // let productId:number = this.routerInfo.snapshot.params("productId");
    //通过拿到的商品id获取商品
    // this.product = this.productService.getProduct(productId);
    //通过id获取商品评论
    // this.comments = this.productService.getCommentsForProductId(productId);
  }

}
