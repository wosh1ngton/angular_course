import { Component } from '@angular/core';

@Component({
  selector: 'app-validacao-from',
  templateUrl: './validacao-from.component.html',
  styleUrls: ['./validacao-from.component.css']
})
export class ValidacaoFromComponent {
  erroUsuarioSenha = {
    codigo: `
      login() {
        this.form.setErrors({
          invalidLogin: true
        });  
      }
    `,
    titulo: 'Código 1',
    pagina: 'signup-form.component.ts'
  };

  erroUsuarioSenhaTemplate = {
    codigo: `
    <form [formGroup]="form" (ngSubmit)="login()">
      <div *ngIf="form.errors" class="alert alert-danger">
          Usuário ou senha inválidos!
      </div>

    ...
    `,
    titulo: 'Código 2',
    pagina: 'signup-form.component.html'
  };


  

  codigoFormGroupAninhado = {
    codigo: `
    form = new FormGroup({
      account: new FormGroup({
        username: new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ], 
        UsernameValidators.shouldBeUnique),
        password : new FormControl('',Validators.required)
      }) 
    });
    `,
    titulo: 'Código 3 - Form Group Aninhado Componente',
    pagina: 'signup-form.component.ts'
  };

  codigoFormGroupTemplate = {
    codigo: `
    <div formGroupName="account">    
    <div class="form-group">
        <label for="username">  Usuário </label>
        <input formControlName="username" type="text" id="username" class="form-control">
        <div *ngIf="username!.pending"> Checando por valor único </div>        
    </div>
    <div class="form-group">
        <label for="password"> Senha </label>
        <input formControlName="password" type="text" id="password" class="form-control">
    </div>
    </div>
    `,
    titulo: 'Código 4 - Form Group Aninhado Template',
    pagina: 'signup-form.component.html'
  };
}
