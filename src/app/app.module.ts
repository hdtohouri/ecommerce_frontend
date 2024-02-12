import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    HomeComponent,
    GestionComponent,
    ContactComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
