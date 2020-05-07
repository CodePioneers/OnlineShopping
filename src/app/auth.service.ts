import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
/* import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;

  currentuser : string
  constructor() { 
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
}

  login(username: string, password: string) {
    this.currentUserSubject.next(username)
    if(username === 'Pioneers'){
    localStorage.setItem('currentUser', username+password);
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
