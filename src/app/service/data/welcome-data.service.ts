import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Product{
  constructor(public name:String,public price:String){}


}
// export class ResponseData{
//   constructor(public responsename:String,public responsePrice:String){}
// }


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(public http:HttpClient) { }

  

    

    retriveProducts(){
    return this.http.get<Product[]>('http://localhost:8080/getProducts');
    //console.log("getdetailsservice executed")
  }
}
