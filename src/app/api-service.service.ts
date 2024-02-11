

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url:string="http://localhost:8585"
  constructor(private http:HttpClient) { }

//les methodes de REST API
public getAllProduits()
{
  return this.http.get(this.url+"/products")
}

public getUsers()
{
  return this.http.get(this.url+"/users")
}

public deleteUser(id:number)
{
  return this.http.delete(this.url+"/user/"+id,{responseType:'text' as 'json'})
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
