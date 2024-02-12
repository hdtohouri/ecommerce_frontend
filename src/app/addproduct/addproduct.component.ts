import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  product_name:string=""
  product_image:string=""
  product_price: number=0
  product_description: string=""
  //produits:any={"idproduit":0,"nomproduit":"","prix":0,"descrption":""} 
  constructor(private api:ApiServiceService)
  {}
  
  public ngOnInit(): void {
    //this.productresgister()
    
  }
  //invocation des methodes du service Rest api employee
  
  public productresgister()
  {
    let products:any={"product_name":this.product_name,"product_image":this.product_image,"product_price":this.product_price,"product_description":this.product_description}
    let res=this.api.productresgister(products)
    //res.subscribe(data => this.products=data)
    res.subscribe(data => alert(data))
   //this.router.navigate(["/employes"])
  }
}
