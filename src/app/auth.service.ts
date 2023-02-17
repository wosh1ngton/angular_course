import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login(credentials: any) {
  //   return this.http.post('http://localhost:3000/auth/login',
  //     JSON.stringify(credentials)).pipe(
  //       map((response: any) => {
  //         console.log(response);
  //         return response;
  //       })
  //     )
  // }

// O erro interrompe o fluxo do processo
  login(credentials: any) {
    const headers = { 'content-type': 'application/json'} ;    
    return this.http.post('http://localhost:3000/auth/login',
      JSON.stringify(credentials), {'headers':headers}).pipe(
        map((response:any) => {
          console.log('passou antes aqui');
          if(response && response.access_token) {
            localStorage.setItem("access_token", response.access_token);  
            console.log('passou');
            return true;            
          }
          console.log('passou errado');
          return false;
        })        
      );  
  }

  exibir() {    
    return this.http.get('http://localhost:3000/api/users')    
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  isLoggedIn() {

    
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('access_token');
    
    if(!token)
      return false;
    
    let isExpired = jwtHelper.isTokenExpired(token);    
    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('access_token');
    if(!token) return null;
    let jwtHelper = new JwtHelperService();   

    return jwtHelper.decodeToken(token);
  }

}
