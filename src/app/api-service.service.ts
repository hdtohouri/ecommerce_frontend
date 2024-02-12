

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url:string="http://localhost:8282"
  constructor(private http:HttpClient) { }

//les methodes de REST API
public getproducts()
{
  return this.http.get(this.url+"/products")
}

public productresgister(products:any)
{
  return this.http.post(this.url+"/add/product",products,{responseType:'text' as 'json'})
}

public getUsers()
{
  return this.http.get(this.url+"/users")
}

public deleteProduct(id:number)
{
  return this.http.delete(this.url+"/product/"+id,{responseType:'text' as 'json'})
}


public loginUser(user:any)
{
  return this.http.post(this.url+"/login",user,{responseType:'text' as 'json'})
}
public registerUser(user:any)
{
  return this.http.post(this.url+"/register",user,{responseType:'text' as 'json'})
}
public adminLogin(admin:any)
{
  return this.http.post(this.url+"/admin/login",admin,{responseType:'text' as 'json'})
}

}
