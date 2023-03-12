import { Component } from '@angular/core';

@Component({
  selector: 'app-sharing-data',
  templateUrl: './sharing-data.component.html',
  styleUrls: ['./sharing-data.component.css']
})
export class SharingDataComponent {
  textoInputP = `
    <p>
      Item do dia: {{ item }}
    </p>
  `

  textoInputCP = `
  <app-item-detail [item]="currentItem"> </app-item-detail>
  `

  textoInputValor = `
  export class AppComponent {
      currentItem = 'Television';
  }
  `

  textoOutputP = `
    //app-item-output é o emissor ou fornecedor do evento newItemEvent
    @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
  `

  textoOutputEF = `
  <label for="item-input"> Add an item: </lable>
  <input type="text" id="item-input" #newItem>
  <button type="button" (click)="addNewItem(newItem.value)"> Add to parent's list </button>
  `

  textoCodigoAddItem = `
  export class AppComponent {
    items = ['item1','item2','item3','item4'];

    addItem(newItem:string) {
        this.items.push(newItem);
    }
  }
  `

  textoCodigoChamada = `
  //app.component é o cliente ou consumidor do evento (newItemEvent)
  <app-item-output (newItemEvent)="addItem($event)"></app-item-output>
  `

  textoExibicao = `
  <ul>
    <li *ngFor="let item of items"> {{item}} </li>
  </ul>
  `
}
