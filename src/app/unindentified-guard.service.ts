import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnindentifiedGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) { 

    }

  canActivate(route: any, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()) return true;
    
    this.router.navigate(['/no-access'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
