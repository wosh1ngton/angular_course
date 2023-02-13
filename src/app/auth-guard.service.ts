import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) { 

    }

  canActivate(route: any, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()) return true;
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
