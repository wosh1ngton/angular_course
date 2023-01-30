import { Component, Input, OnInit } from '@angular/core';
interface Codigo {
  titulo : string;
  codigo: string;
  pagina: string;

}
@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {

  constructor() { }
  @Input() parametros : Codigo = {
    titulo : '',
    codigo : '',
    pagina : ''
  };
  
  ngOnInit(): void {
  }

}
