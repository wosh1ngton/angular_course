import { Component } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  codigoFormArray = {
    codigo: `
      form = new FormGroup({
        topics: new FormArray([])
      });
    `,
    titulo: 'Código 1 - Criando o FormArray',
    pagina: 'gerador-objetos.component.ts'
  };


  codigoAddTopicoFormArray = {
    codigo: `
      get topics() {
        return this.form.get('topics') as FormArray;
      }

      addTopic(topic: HTMLInputElement) {
        this.topics.push(new FormControl(topic.value));
        topic.value='';
      }

      removeTopic(topic: AbstractControl) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
      }
    `,
    titulo: 'Código 2 - Criando os métodos de adição no FormArray',
    pagina: 'gerador-objetos-component.ts'
  };

  codigoFrontEndFormArray = {
    codigo: `
    <form>
      <input type="text" class="form-control" (keyup.enter)="addTopic(topic)" #topic>
      <ul class="list-group">
          <li 
              *ngFor="let topic of topics.controls" 
              class="list-group-item" 
              (click)="removeTopic(topic)">     
                    
              {{ topic.value }}
          </li>
      </ul>
    </form>
    `,
    titulo: 'Código 3 - Template do FormArray',
    pagina: 'gerador-objetos.component.html'
  };
} 
