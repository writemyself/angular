import { ProductService } from './service/product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { UtilService } from './service/util/util.service';
import { FormsModule } from '@angular/forms';

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
import { TestChildComponent } from './test-child/test-child.component';
import { FormComponent } from './form/form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TempleteFormComponent } from './templete-form/templete-form.component';

const routerConfig: Routes = [
    //路由为空时重定向到home组件
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "productDetail/:productId", component: ProductDetailComponent },
    //学习测试的页面路由加在后面
    { path: "bind", component: BindComponent },
    { path: "response", component: ResponseComponent },
    { path: "form", component: FormComponent},  //学习表单的模块
    { path: "test", component: TestComponent},
    { path: "parent", component: ParentComponent},
    { path: "templeteForm", component: TempleteFormComponent},
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
        TestComponent,
        TestChildComponent,
        FormComponent,
        ParentComponent,
        ChildComponent,
        TempleteFormComponent
    ],
    imports: [
        FormsModule,  //创建模板驱动的表单需要引入
        BrowserModule,
        ReactiveFormsModule , //响应式表单编程模块
        RouterModule.forRoot(routerConfig)
    ],
    providers: [  //这里注入服务
        ProductService, //商品服务
        // UtilService     //工具
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
