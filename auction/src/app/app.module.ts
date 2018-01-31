import { ProductService } from './service/product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilService } from './service/util/util.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BindComponent } from './bind/bind.component';
import { Page404Component } from './page404/page404.component';
import { ResponseComponent } from './response/response.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { TestComponent } from './test/test.component';

const routerConfig: Routes = [
    //路由为空时重定向到home组件
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "productDetail/:productId", component: ProductDetailComponent },
    //学习测试的页面路由加在后面
    { path: "bind", component: BindComponent },
    { path: "response", component: ResponseComponent },
    { path: "test", component: TestComponent},
    //页面不存在路由，一定放最后
    { path: '**', component: Page404Component }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchComponent,
        CarouselComponent,
        ProductComponent,
        StarsComponent,
        HomeComponent,
        ProductDetailComponent,
        BindComponent,
        Page404Component,
        ResponseComponent,
        MultiplePipe,
        FilterPipe,
        TestComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule , //响应式编程模块
        RouterModule.forRoot(routerConfig)
    ],
    providers: [  //这里注入服务
        ProductService, //商品服务
        UtilService     //工具
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
