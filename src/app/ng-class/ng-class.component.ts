import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  onFavoriteChanged(eventArgs: {}) {
    console.log("favorite changed!", eventArgs);
  }
  post = {
    title: "title",
    isFavorite: false
  }
  
  textoClassBinding = {
    codigo: `
  <i (click)="onClick()" [class.bi-star-fill]="favorito" [class.bi-star]="!favorito" class="h4 mt-3"></i> 
  `,
    titulo: 'Código 1 - Uso de classes alternativas',
    pagina: 'ng-class.component.html'
  }

textoNgClass = {
  codigo: `
  <i (click)="onClick()" 
      [ngClass]="{
          'bi-star-fill' : favorito,
          'bi-star' : !favorito
      }"
      class="h4 mt-3">
  </i> 
  `,
  titulo: 'Código 2 - Uso básico do ngClass',
  pagina: 'ng-class.component.html'
}

textoExpressaoClassBinding = {
  codigo: `
  <i (click)="onClick()" [class]="{'bi-star-fill' : favorito, 'bi-star' : !favorito}" class="h4 mt-3"></i> 
  `,
  titulo: 'Código 3 - ClassBinding',
  pagina: 'ng-class.component.html'
}
}
