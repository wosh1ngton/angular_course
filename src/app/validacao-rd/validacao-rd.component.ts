import { Component } from '@angular/core';

@Component({
  selector: 'app-validacao-rd',
  templateUrl: './validacao-rd.component.html',
  styleUrls: ['./validacao-rd.component.css']
})
export class ValidacaoRdComponent {
  pp = {
    codigo: `  
    import { AbstractControl, ValidationErrors } from "@angular/forms";
  
    export class UsernameValidators {
        
        static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
            if((control.value as string).indexOf(' ') >= 0) 
                return { cannotContainSpace : true };
            return null;
        }
    }
    `,
    titulo: 'Código Validator Customizado',
    pagina: 'username.validators.ts'
  }

  validadorSignUp = {
    codigo: `
    form = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ]),
    `,
    titulo: 'Código 2',
    pagina: 'signup-form.component.ts'
  }
}
