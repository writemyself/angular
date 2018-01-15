import { SellerInfoComponent } from './seller-info/seller-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//导入HomeComponent组件
import { HomeComponent } from './home/home.component';
//导入ProductComponent商品信息组件
import { ProductComponent } from './product/product.component';
//导入404页面
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';

const routes: Routes = [
  {
    //路由为空时重定向到home组件
    path: '', redirectTo:'home', pathMatch: 'full'
  },
  {
    //空路由
    path: 'home', component: HomeComponent
  },
  {
    //product组件
    path: 'product', component: ProductComponent,
    children:[
      {path:"", component:ProductDescComponent},
      {path:"seller/:id", component: SellerInfoComponent}
    ]
  },
  {
    //页面不存在路由，一定放最后
    path: '**', component:Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
