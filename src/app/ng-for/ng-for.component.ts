import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {


  textoFor = {
      codigo: `
        <ul class="list-group list-group-flush">            
          <li class="list-group-item" *ngFor="let curso of cursos; let i = index; let isEven = even; let isOdd = odd">

            <div *ngIf="switchImpar == true; then impares; else null;"> </div>
            <div *ngIf="switchPar == true; then pares; else null;"> </div>
            <div *ngIf="switchPar == false && switchImpar == false; then todos; else null;"> </div>

            <ng-template #impares>
                <span *ngIf="isEven"> <span [hidden]="mySwitch == false"> {{ i }} - </span> {{ curso.nome }}  </span>
            </ng-template>

            <ng-template #pares>
              <span *ngIf="isOdd"> <span [hidden]="mySwitch == false"> {{ i }} - </span> {{ curso.nome }} </span>
            </ng-template>

            <ng-template #todos>
              <span> <span [hidden]="mySwitch == false"> {{ i }} - </span> {{ curso.nome }}  </span>
            </ng-template>              
          </li>
        </ul>
        `,
      titulo: 'Código 1 - Uso básico do ngFor',
      pagina: 'ng-for.component.html'
}


  textoTrackBy = {
    codigo: `
      <ul>
        <li *ngFor="let items of item; trackBy: trackItem">
          {{ item.nome }}
        </li>
      </ul>

      trackItem(index, item) {
        return item ? item.id : undefined;
      }
    `,
    titulo: 'Código 2 - Uso do trackBy no ngFor',
    pagina: 'ng-for.component.html'
  }


  onClickSendTotal(valor: string) {
    const numberValue = Number(valor);
    this.cursos = [];
    for (let index = 0; index < numberValue; index++) {
      this.cursos.push({ id: index, nome: 'Curso ' + index });
    }
  }

  trackby(index: number, curso: any) {
    return curso ? curso.id : undefined;
  }

  mySwitch = false;
  switchPar = false;
  switchImpar = false;

  cursos = [
    { id: 1, nome: 'curso 1' },
    { id: 2, nome: 'curso 2' },
    { id: 3, nome: 'curso 3' },
    { id: 4, nome: 'curso 4' },
  ]
}
