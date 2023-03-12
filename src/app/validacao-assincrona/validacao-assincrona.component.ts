import { Component } from '@angular/core';

@Component({
  selector: 'app-validacao-assincrona',
  templateUrl: './validacao-assincrona.component.html',
  styleUrls: ['./validacao-assincrona.component.css']
})
export class ValidacaoAssincronaComponent {
  asyncValidatorFn = {
    codigo: `
    interface AsyncValidatorFn {
      (control: AbstractControl<any, any>): Promise<ValidationErrors | null> | 
      Observable<ValidationErrors | null>
    }    
    `,
    titulo: 'Código 1',
    pagina: 'angular.io'
  }

  exemploAsyncValidatorFn = {
    codigo: `
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {

      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if(control.value === 'wos')
                  resolve({shouldBeUnique: true });
              else 
                  resolve(null);
          }, 2000);
      });       
    }
    `,
    titulo: 'Código 2',
    pagina: 'username.validator.ts'
  };
}
