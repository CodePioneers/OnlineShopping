import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent},
  {path:'products', component: ProductsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
