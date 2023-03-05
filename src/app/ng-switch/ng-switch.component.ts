import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  
  testeSwitch = 'mapa';

  textoSwitchCase = {
      codigo: `
      <ul class="nav nav-tabs">
        <li class="nav-item"> 
          <a href="#" class="nav-link" [class.active]="testeSwitch === 'mapa'" (click)="testeSwitch = 'mapa'">Mapa</a>  
        </li>
        <li class="nav-item"> 
          <a href="#" class="nav-link" [class.active]="testeSwitch === 'lista'" (click)="testeSwitch = 'lista'">Lista</a> 
        </li>
        <li class="nav-item"> 
          <a href="#" class="nav-link" [class.active]="testeSwitch === 'outros'" (click)="testeSwitch = 'outros'">Outros</a> 
        </li>
      </ul>

      <div [ngSwitch]="testeSwitch">
        <div *ngSwitchCase="'mapa'" class="p-2"> Conteúdo de Mapa </div>
        <div *ngSwitchCase="'lista'" class="p-2"> Conteúdo de Lista </div>
        <div *ngSwitchCase="'outros'" class="p-2"> Conteúdo de Outros </div>
      </div>
      `,
    titulo: 'Código 1 - Uso de ngSwitchCase',
    pagina: 'ng-switch.component.html'
    }
}
