import { ProductService } from './service/product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
// import { Page404Component } from './page404/page404.component';

const routerConfig: Routes = [
    //路由为空时重定向到home组件
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "productDetail/:productId", component: ProductDetailComponent },
    // {
        //页面不存在路由，一定放最后
        // path: '**', component: Page404Component
    // }
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
        // Page404Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routerConfig)
    ],
    providers: [ProductService], //这里注入服务
    bootstrap: [AppComponent]
})
export class AppModule { }
