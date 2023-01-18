import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface SubMenu {
  id: number,
  link: string,
  nome: string
}

@Component({
  selector: 'app-submenus',
  templateUrl: './submenus.component.html',
  styleUrls: ['./submenus.component.css']
})
export class SubmenusComponent implements OnInit {

  constructor() { }
  
  @Output() menuAtivado = new EventEmitter<string>();
  menuAtivo = '';
  @Input() subMenus : SubMenu[] = []

  ngOnInit(): void {
  }

  ativarSubMenu(value: string) {
    this.menuAtivado.emit(value);
    this.menuAtivo = value;
    console.log(value);
  }

}
