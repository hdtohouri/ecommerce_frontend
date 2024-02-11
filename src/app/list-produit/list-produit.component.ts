import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  produits:any  =[]

  constructor(private api:ApiServiceService)
  {}
  
  public ngOnInit(): void {
    this.allProduits()
    
  }
  //invocation des methodes du service Rest api employee
  
  public allProduits()
  {
    let res=this.api.getAllProduits()
    res.subscribe(data => this.produits=data)
  }
  
  
 
 
}
