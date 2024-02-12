import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  nom:string=""
  image:string=""
  prix: number=0
  produits:any={"idproduit":0,"nomproduit":"","prix":0} 
  constructor(private api:ApiServiceService)
  {}
  
  public ngOnInit(): void {
    this.allProduits()
    
  }
  //invocation des methodes du service Rest api employee
  
  public allProduits()
  {
    let res=this.api.getproducts()
    res.subscribe(data => this.produits=data)
  }
  
 
}
