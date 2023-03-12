import { Component } from '@angular/core';

@Component({
  selector: 'app-info-rotas',
  templateUrl: './info-rotas.component.html',
  styleUrls: ['./info-rotas.component.css']
})
export class InfoRotasComponent {
  codigoAcessoParamRoute = {
    codigo: `
    export class PerfilComponent implements OnInit {

      constructor(private route: ActivatedRoute) { }
    
      ngOnInit(): void {
        this.route.paramMap
          .subscribe(params => {
            let id = params.get('id');
            console.log(id);
          });
      }    
    }    
    `,
    titulo: 'Parâmetros de rotas',
    pagina: 'perfil.component.ts'
  };

  codigoMultipleRoutes = {
    codigo: `
    //app.module.ts
    {path: 'followers/:id/:username', component: PerfilComponent },

    //followers.component.html
    <a [routerLink]="['/followers', follower.id, follower.login]" > {{ follower.login }} </a>
    `,
    titulo: 'Código 2 - Múltiplas rotas',
    pagina: 'diversas'
  }

  

}
