import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-rotas',
  templateUrl: './overview-rotas.component.html',
  styleUrls: ['./overview-rotas.component.css']
})
export class OverviewRotasComponent {
  codigoRotas = {
    codigo: `
    const routes : Routes = [
      {path: '', component: HomeComponent },
      {path: 'profile/:username', component: PerfilComponent },
      {path: 'followers', component: FollowersComponent },      
      {path: 'posts', component: PostComponent },
      {path: '**', component: NotFoundComponent },
    ]
    `,
    titulo: 'Código 1 - constante de rotas',
    pagina: 'app.module.ts'
  };

  codigoRouterLink = {
    codigo: `
    <!-- chamada comum de um elemento estático -->
      <a class="nav-link" routerLink="/followers">

    <!-- chamada de um elemento dinâmico de uma lista de links gerados dinamicamente - property binding em ação -->
    <ul class="navbar-nav">        
      <li class="nav-item" *ngFor="let menu of subMenus">           
        <a class="nav-link" 
        [routerLink]="menu.link">
            {{ menu.nome }}
        </a>
      </li>         
    </ul>

    <!-- chamada a uma rota dinâmica, são dois parâmetros: a rota e depois os parâmetros da rota -->
    <a [routerLink]="['/followers', follower.id]">
    `,
    titulo: 'Código 2 - roteamento',
    pagina: 'diversas'
  };

  codigoChildrenRotas = {
    codigo: `
    {path: 'rotas', component: RotaComponent,
    children: [
      {path: 'geral', component: OverviewRotasComponent,
        children: [
          {path: 'followers/:id', component: PerfilComponent },
          {path: 'followers', component: FollowersComponent },  
          {path: 'posts', component: PostComponent}    
        ]
      },
      {path: 'ordem', component: InfoRotasComponent},
      {path: 'querystring', component: ParamRotasComponent},
      {path: '', redirectTo: 'geral', pathMatch: 'full'}
    ]
  }
  `,
  titulo: 'Código 3 - Utilizando chidren e redirectTo',
  pagina: 'info-rotas.component.ts'
  }

  menusFollowers = [
    { id: 1, link: 'followers', nome: 'Followers' },
    { id: 1, link: 'posts', nome: 'Posts' },
  ]

}
