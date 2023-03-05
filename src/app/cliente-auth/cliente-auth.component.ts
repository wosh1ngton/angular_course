import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-auth',
  templateUrl: './cliente-auth.component.html',
  styleUrls: ['./cliente-auth.component.css']
})
export class ClienteAuthComponent {
  codigoTemplateLogin = {
    codigo: `
    <form class="form-signin" #f="ngForm" (ngSubmit)="signIn(f.value)">
      <h2 class="form-signin-heading">
          Por favor, informe seu usuário e senha
      </h2>
      <div *ngIf="invalidLogin" class="alert alert-danger">
          Usuário e/ou senha inválidos
      </div>

      <label for="username"> Usuário </label>
      <input ngModel type="text" name="username" class="form-control">

      <label for="password"> Senha </label>
      <input ngModel type="text" name="password" class="form-control">
      
      <button class="btn btn-primary"> Logar </button>
    </form>
    `,
    titulo: 'Código 1 - Template Login',
    pagina: 'login.component.html'
  };

  codigoTypeLogin = {
    codigo: `
    import { Component, Input, OnInit } from '@angular/core';
    import { ActivatedRoute, Router } from '@angular/router';
    import { AuthService } from '../auth.service';


    @Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
    })
    export class LoginComponent implements OnInit {     

      invalidLogin : boolean = false;
      constructor(
        private router: Router,
        private authService: AuthService,
        private route: ActivatedRoute
      ) { }

      ngOnInit(): void {
      }

      signIn(credentials:any) {
        this.authService.login(credentials)
          .subscribe({
          next: result => {
            console.log(result);
            if(result) {          
              let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
              this.router.navigate([returnUrl || '/']);
            }
          },
          error: (e: AppError) => {                                      
              this.invalidLogin = true;          
          }
        }
      )}
    }
  }

    `,
    titulo: 'Código 2 - Login Typescript',
    pagina: 'login.component.ts'
  };


  codigoAuthService = {
    codigo: `
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // O erro interrompe o fluxo do processo
    login(credentials: any) {
      const headers = { 'content-type': 'application/json'} ;    
      return this.http.post('http://localhost:3000/auth/login',
        JSON.stringify(credentials), {'headers':headers}).pipe(
          map((response:any) => {            
            if(response && response.access_token) {
              localStorage.setItem("access_token", response.access_token);                
              return true;            
            }            
            return false;
          }),
          catchError(error => {            
            var erro = throwError(() => error);          
            return erro;
          })       
        );  
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
`,
titulo: 'Código 3 - serviço de login',
pagina: `auth.service.ts`,
}
}
