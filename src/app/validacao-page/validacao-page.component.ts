import { Component } from '@angular/core';

@Component({
  selector: 'app-validacao-page',
  templateUrl: './validacao-page.component.html',
  styleUrls: ['./validacao-page.component.css']
})
export class ValidacaoPageComponent {
  textoNgModel = {
    codigo: `
  <!-- dentro do style.css faça -->
  .form-control.ng-invalid.ng-touched {
    border: 2px solid #ff0000;
  }

  <form>
    <div class="form-group">
    <label for="firstName"> Nome </label>
    <input required ngModel name="firstName" #firstName="ngModel" 
    minlength="3"
    maxlength="10"
    pattern="banana"
    (change)="log(firstName)" 
    type="text" 
    class="form-control" 
    id="firstName">

    <div class="alert alert-danger" *ngIf="firstName.touched && firstName.invalid">
        <div *ngIf="firstName.errors?.['required']"> Nome é obrigatório! </div>    
        <div *ngIf="firstName.errors?.['minlength']"> O nome deve ter pelo menos {{ firstName.errors?.['minlength'].requiredLength }} letras </div> 
        <div *ngIf="firstName.errors?.['pattern']"> O padrão é banana </div> 
    </div>
    </div>
    <div class="form-group">
        <label for="comment">
            Comentário
        </label><textarea ngModel name="comment"  id="comment" cols="30" rows="10" class="form-control"></textarea>

    </div>
    <button class="btn btn-primary">Enviar</button>
  </form>
  `,
    titulo: 'Código 1 - Exemplos de validação de página',
    pagina: 'validacao-page.component.html'
  }
}
