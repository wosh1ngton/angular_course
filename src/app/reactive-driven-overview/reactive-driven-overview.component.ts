import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-driven-overview',
  templateUrl: './reactive-driven-overview.component.html',
  styleUrls: ['./reactive-driven-overview.component.css']
})
export class ReactiveDrivenOverviewComponent {
  t = {
    codigo: `
    signup-form.component.ts
  
      form = new FormGroup({
        username: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        password : new FormControl('',Validators.required)
      });
  
      ....
  
    signup-form.component.html
  
    <form [formGroup]="form">
      <div class="form-group">
          <label for="username">  Usuário </label>
          <input formControlName="username" type="text" id="username" class="form-control">
          <div *ngIf="username!.invalid && username!.touched" class="alert alert-danger">
            <div *ngIf="username!.errors?.['required']">Username é obrigatório</div>
            <div *ngIf="username!.errors?.['minlenght']">Pelo menos {{username!.errors?.['minlenght'].requiredLength}} caracteres devem ser informados</div>
          </div>
      </div>
      <div class="form-group">
          <label for="password"> Senha </label>
          <input formControlName="password" type="text" id="password" class="form-control">
      </div>
      <div class="form-group pt-3">
      <button class="btn btn-primary"> Logar </button>
    </div>
    </form>
  
    `,
    titulo: 'Código 1',
    pagina: 'p1'

  };

  codigoSimplificado = {
    codigo: `
    get username() {
      return this.form.get('username');
    }

    get password() {
      return this.form.get('password');
    }
  `,
    titulo: 'Código 2',
    pagina: 'p2'
  };
}
