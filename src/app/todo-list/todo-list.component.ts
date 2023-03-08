import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  private itens : any[] = [];

  addItem(input: HTMLInputElement) {
    
    this.itens.splice(0, 0, input.value); 
    input.value = '';    
  }
  
  removeItem(item: any) {
    const index = this.itens.indexOf(item);
    this.itens.splice(index, 1);
  }

  getItens() {
    return this.itens;
  }
}
