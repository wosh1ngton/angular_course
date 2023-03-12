import { Component } from '@angular/core';

@Component({
  selector: 'app-animations-page',
  templateUrl: './animations-page.component.html',
  styleUrls: ['./animations-page.component.css']
})
export class AnimationsPageComponent {

  codigoFadeIn = {
    codigo: `
    @Component({
      selector: 'app-todo-list',
      templateUrl: './todo-list.component.html',
      styleUrls: ['./todo-list.component.css'],
      animations: [
       trigger('fade', [    
        transition('void => *', [
          style({ opacity: 0 }),
          animate(2000)
        ]),
        transition('* => void', [
          animate(2000, style({ opacity: 0 }))
        ])
       ]) 
      ]
    })    
    `,
    titulo : 'Código 1 - configurando o efeito fade-in',
    pagina: 'todo.component.ts'
  }

  codigoAnimationSimplificado = {
    codigo: `
    animations: [
      trigger('fade', [   
       state('void', style({ opacity: 0 })),
   
       transition('void => *', [      
         animate(2000)
       ]),
       transition('* => void', [
         animate(2000)
       ])
      ]) 
     ]
    `,
    titulo: 'Código 2 - simplificação e uso de state',
    pagina: 'todo.component.ts'
  }

  codigoTransicaoSimplificada = {
    codigo: `
    animations: [
      trigger('fade', [   
       state('void', style({ opacity: 0 })),
   
       transition(':enter, :leave', [      
         animate(2000)
       ])
      ]) 
     ]
    `,
    titulo: 'Código 3 - Simplificação da transição',
    pagina: 'todo.component.ts'
  }


  codigoKeyFrame = {
    codigo: `
    transition(':enter', [
      style({ transform: 'translateX(-10px)'}),
      animate(500)
  ]),
  transition(':leave', [        
      animate('1s ease-in', keyframes([
          style({ offset: .2, opacity: 1, transform: 'translateX(20px)' }),
          style({ offset: 1, opacity: 0, transform: 'translateX(-100%)'})
      ]))
  ])
    `,
    titulo: 'Código 4 - keyframe',
    pagina: 'todo.component.ts'

  }

  codigoReusoAnimation = {
    codigo: `
      export const bounceOutLeftAnimation = animation(
          animate('1s ease-in', keyframes([
              style({ offset: .2, opacity: 1, transform: 'translateX(20px)' }),
              style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
          ]))
      )
  
  
      export const slide = trigger('slide', [
      
          transition(':enter', [
              style({ transform: 'translateX(-10px)' }),
              animate(500)
          ]),
          transition(':leave', useAnimation(bounceOutLeftAnimation))
      
      ])
    `,
    titulo: 'Código 5 - Reuso de animation',
    pagina: 'animation.ts'
  }
}
