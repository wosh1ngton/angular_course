import { Component, EventEmitter, Input, Output } from '@angular/core';

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
export class SubmenusComponent  {
  
  //@Output() menuAtivado = new EventEmitter<string>();
  //menuAtivo = '';
  @Input() subMenus : SubMenu[] = []

  

  // ativarSubMenu(value: string) {
  //   this.menuAtivado.emit(value);
  //   this.menuAtivo = value;
  //   console.log(value);
  // }

}
