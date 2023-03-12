import { animate, animateChild, query, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounceOutLeftAnimation, fade, slide } from '../animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'], 
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        query('h3', [
          style({ transform: 'translateY(-20px)'}),
          animate(1000)
        ]),
        query('@todoAnimation', animateChild())
      ])
    ]),
    
    trigger('todoAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(2000)
      ]),
      transition(':leave', [
        style({backgroundColor: 'red'}),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodoListComponent {

  private itens : any[] = [
    'item 1',
    'item 2',
    'item 3'
  ];

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

  animationStarted($event: any) {console.log($event)}
  animationDone($event: any) {console.log($event)}
}
