import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MyFirstService } from './services/my-first.service';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgOptimizedImage } from '@angular/common';
import { NewProductComponent } from './new-product/new-product.component';
import { HeroComponent } from './hero/hero.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NewProductComponent,
    HeroComponent,
    HeroComponent,
    TripsComponent,
    TripDetailComponent,
    BlogComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [MyFirstService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
