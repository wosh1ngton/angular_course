import { Component } from '@angular/core';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.css']
})
export class RotaComponent {
  menuRouters = [
    { id: 1, link: 'geral', nome: 'Visão Geral' },
    { id: 2, link: 'ordem', nome: 'Informações de rota' },
    { id: 3, link: 'querystring', nome: 'Parâmetros Opcionais' },
  ]



}
