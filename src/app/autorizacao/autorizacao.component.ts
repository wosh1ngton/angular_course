import { Component } from '@angular/core';

@Component({
  selector: 'app-autorizacao',
  templateUrl: './autorizacao.component.html',
  styleUrls: ['./autorizacao.component.css']
})
export class AutorizacaoComponent {
  codigoAuthServiceCliente = {
    codigo: `
  import { Injectable } from '@angular/core';
  import { CanActivate, Router } from '@angular/router';
  import { AuthService } from './auth.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AdminAuthGuard implements CanActivate {
  
    constructor(
      private router: Router,
      private authService: AuthService
  
    ) { }
  
    canActivate() {
      if(this.authService.currentUser && this.authService.currentUser.admin === 'true') return true;
  
      this.router.navigate(['no-access']);
      return false;
    }
  }
  `,
  titulo: 'Código 1 - Serviço de autorização para a página admin',
  pagina: 'admin-auth-guard-service.ts'
  }
  
  
  codigoRotaGuardCondicao = {
    codigo: `
    const routes : Routes = [
      {path: '', component: HomeComponent, canActivate: [UnindentifiedGuardService] },
      {path: 'followers/:id/:username', component: PerfilComponent },
      {path: 'followers', component: FollowersComponent },      
      {path: 'posts', component: PostComponent },  
      {path: 'archive/:year/:month', component: ArchiveComponent },
      {path: 'archive', component: ArchiveComponent},
      {path: 'login', component: LoginComponent },
      {
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard, AdminAuthGuardService]
      },
    
    `,
    titulo: 'Código 2 - array de rotas',
    pagina: 'app.module.ts'
  }
}
