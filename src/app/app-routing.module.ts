import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { HomeComponent } from './home/home.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContactComponent } from './contact/contact.component';
import { AddproductComponent } from './addproduct/addproduct.component';
const routes: Routes = [
  {path:"products" ,component:ListProduitComponent},
  {path:"home" ,component:HomeComponent},
  {path:"gestion" ,component:GestionComponent},
  {path:"contact" ,component:ContactComponent},
  {path:"add/product" ,component:AddproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
