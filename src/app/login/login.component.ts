import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }
  handleLogin(){
    console.log(this.username,this.password)
    if(this.username==='Pioneers'&& this.password==='dummy'){
      this.router.navigate(['welcome'])
      this.invalidlogin=false
    }
    else{
    this.invalidlogin=true
    }
}

  ngOnInit() {
  }

}
