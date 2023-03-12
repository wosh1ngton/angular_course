import { Component } from '@angular/core';

@Component({
  selector: 'app-ngform-page',
  templateUrl: './ngform-page.component.html',
  styleUrls: ['./ngform-page.component.css']
})
export class NgformPageComponent {

  textoNgForm = {
    codigo: `
      <form #f="ngForm" (ngSubmit)="submit(f)"> 
      ...
      export class ContactFormComponent  {
      ...
      submit(f: any) {
        console.log(f);
      }
      `,
    titulo: 'Código 1 - ngForm',
    pagina: 'ngform-page.component.html'
  }

  textoNgModelGroup = {
    codigo: `
      <form #f="ngForm" (ngSubmit)="submit(f)"> 
        <div ngModelGroup="contato" #contato="ngModelGroup">
            <div *ngIf="contato.valid">
                ...
            </div>
        <div class="form-group">
        <label for="firstName"> Nome </label>

        <input required ngModel name="firstName" #firstName="ngModel">

        ...
        <button class="btn btn-primary" [disabled]="f.invalid">Enviar</button>
      `,
    titulo: 'Código 2 - uso do ngSubmit',
    pagina: 'ngform-page.component.html'
    }
}
