import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { CategoryComponent } from './compnents/category/category.component';
import { AboutComponent } from './compnents/about/about.component';
import { ContactComponent } from './compnents/contact/contact.component';
import { LoginComponent } from './compnents/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'category', component: CategoryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
