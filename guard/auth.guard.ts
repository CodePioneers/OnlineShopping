import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, 
  private authservice: AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.authservice.currentUserValue);
      if(this.authservice.currentUserValue === 'Pioneers' || this.authservice.currentUserValue === 'Pioneersdummy'){
        return true;
      }
      this.router.navigate(['./login']);
      return false;
  }
}
