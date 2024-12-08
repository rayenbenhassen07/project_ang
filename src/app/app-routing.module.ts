import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HeroComponent } from './hero/hero.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', // Ensures the entire URL matches for redirection
  },
  { path: 'trip-detail/:id', component: TripDetailComponent },
  {
    path: 'home',
    component: HeroComponent,
  },
  {
    path: 'account',
    component: MyFirstCompComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  { path: 'blog/:id', component: BlogDetailComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:username',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'new-product',
    component: NewProductComponent,
  },
  {
    path: 'trips',
    component: TripsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
