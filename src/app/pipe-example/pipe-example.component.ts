import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  template: `
  {{course.title | uppercase}} <br />
  {{course.students | number }} <br />
  {{course.rating | number:'1.2-2'}} <br />  
  {{course.price | currency:'BRL':"code" }} <br />
  {{course.releaseDate | date:'shortDate' }} <br />
  {{ text | summary:10 }}
  `,
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }
  course = {
    title: "Eu Robô",
    rating: 4.9785,
    students: 30125,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }

  text = 'Com esta sintaxe, o método onKeyUp() somente será chamado se o Enter for pressionado, ou seja, o evento onKeyUp foi filtrado para responder apenas quando o Enter. É possível fazer o bind para vários eventos do teclado, você pode especificar a tecla ou o código que você quiser, Combinações de teclas podem ser separadas por ponto';

  ngOnInit(): void {
  }

}
