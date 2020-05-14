import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  retriveProducts(){

  return this.http.get<Product[]>("http://localhost:8080/getProducts")
  
  }

}
