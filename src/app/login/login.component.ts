import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



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
  authservice : AuthService

  constructor(private router: Router) { }
  handleLogin(){
    console.log(this.username,this.password)
    if(this.username==='Pioneers'&& this.password==='dummy'){
      this.authservice.login(this.username,this.password)
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
