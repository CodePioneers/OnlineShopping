import { Injectable } from '@angular/core';
/* import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentuser : string
  constructor() { }

  login(username: string, password: string) {
    this.currentuser = username
    if(username === 'Pioneers'){
    localStorage.setItem('currentUser', username+password);
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
