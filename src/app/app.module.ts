import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compnents/home/home.component';
import { NavbarComponent } from './compnents/navbar/navbar.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { ContactComponent } from './compnents/contact/contact.component';
import { AboutComponent } from './compnents/about/about.component';
import { CategoryComponent } from './compnents/category/category.component';
import { LoginComponent } from './compnents/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    CategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
