import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandedCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,        
        opacity: 0      
      })),
      state('expanded', style({
        height: '*',
        padding: '*'      
      })),
      
      transition('collapsed => expanded', [
        animate('1000ms ease-out', style({
          height: '*',
          paddingTop: 0,
          paddingBottom: 0,
        })),
        animate('1s', style({opacity: 1}))
      ]),
      transition('expanded => collapsed', [
        animate('1000ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent  {
  @Input() title = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  isExpanded = true;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
