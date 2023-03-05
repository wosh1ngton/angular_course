import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent  {

  
  courses: number[] = [];
  
 

  onKeyUp(valor: string) {
    const numberValue = Number(valor)
    this.courses = [];
    if (numberValue > 0)
      this.courses.push(numberValue);

  }

  textoHtml = {
      codigo: `
        <div *ngIf="courses.length > 0" class="p-3 bg-light text-primary border border-primary">
          Lista de Cursos
        </div>

        <div *ngIf="courses.length == 0" class="p-3 bg-light text-danger border border-danger">
          Ainda não há cursos
        </div> `,
      titulo: 'Código 1 - Uso básico do ngIf',
      pagina: 'ngif.component.html'

    }

  textoHtmlIfNGTemplate = {
    codigo: `
        <div *ngIf="courses.length > 0; then coursesList else noCourses"> </div>

        <ng-template #coursesList class="border border-primary text-primary">
          <div class="border border-primary text-primary-3 p-3"> Lista de Cursos </div>               
        </ng-template>

        <ng-template #noCourses>
          <div class="border border-danger text-danger p-3"> Ainda não há cursos </div> 
        </ng-template>
      `,
    titulo: 'Código 2 - Uso do ngIf com template variable',
    pagina: 'ngif.component.html'
    
  }

  textoHtmlHidden = {
      codigo: `
      <div [hidden]="courses.length == 0" class="text-primary border border-primary p-3">
          Lista de cursos
      </div>

      <div [hidden]="courses.length > 0" class="text-danger border border-danger p-3">
          Ainda não há cursos
      </div>
      `,
      titulo: ' Código 3 - Uso de hidden para esconder elementos',
      pagina: 'ngif.component.html'
  }

  textNgIfSemAsterisco = {
      codigo: `
        <div *ngIf="cursos.length > 0; else semCursos">
          Lista de Cursos
        </div>

        <!-- Ficaria assim -->

        <ng-template [ngIf]="cursos.lenght > 0">
            <div>
                Lista de cursos
            </div>
        </ng-template>
        <ng-template [ngIf]="!(cursos.lenght > 0)">
            Nenhum cursos
        </ng-template>
        `,
      titulo: 'Código 4 - Uso de leading asterisk',
      pagina: 'ngif.component.html'
  }

}
