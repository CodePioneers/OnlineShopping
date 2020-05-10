import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class message{
  constructor(public name:String, public pwdmessage:String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(public http:HttpClient) { }

  getDetailsService(){
    return this.http.get<message>('http://localhost:8080/Hello/path-variable/prasanna');
    //console.log("getdetailsservice executed")
  }
}
