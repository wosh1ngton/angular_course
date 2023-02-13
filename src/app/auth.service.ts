import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

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

  login(credentials: any) {
    const headers = { 'content-type': 'application/json'} ;
    const body=JSON.stringify(credentials);
    return this.http.post('http://localhost:3000/auth/login',
      JSON.stringify(credentials), {'headers':headers}).pipe(
        map((response:any) => {
          console.log(response);
          if(response && response.access_token) {
            localStorage.setItem("access_token", response.access_token);
            return true;
          }
          return false;
        })       
      );  
      
      //return result;
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
    console.log("token com problema" + token);
    if(!token)
      return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token!);
    let isExpired = jwtHelper.isTokenExpired(token);
    console.log("Expiration Date", expirationDate)
    console.log("Expiration?", isExpired);
    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('access_token');
    if(!token) return null;

    let jwtHelper = new JwtHelperService();
    let result= jwtHelper.decodeToken(token);
    console.log(result);
    return jwtHelper.decodeToken(token);
  }

}
