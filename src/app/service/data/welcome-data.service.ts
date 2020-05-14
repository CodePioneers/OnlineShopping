import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(public http:HttpClient) { }

  getDetailsService():Observable<any>{
    return this.http.get('http://localhost:8080/Hello/path-variable/prasanna');
    //console.log("getdetailsservice executed")
  }
}
