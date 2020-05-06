import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='Pioneers'
  password=''
  invalidlogin=false
  errormessage='Please enter valid credetails'

  constructor() { }
  handleLogin(){
    console.log(this.username,this.password)
    if(this.username==='Pioneers'&& this.password==='dummy'){
    this.invalidlogin=false
    }
    else{
    this.invalidlogin=true
    }
}

  ngOnInit() {
  }

}
