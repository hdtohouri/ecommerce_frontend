import { Component , OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit  {

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
  