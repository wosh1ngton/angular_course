import { Component } from '@angular/core';

@Component({
  selector: 'app-param-rotas',
  templateUrl: './param-rotas.component.html',
  styleUrls: ['./param-rotas.component.css']
})
export class ParamRotasComponent {
  archives = [
    { 'year': 2020, 'month': 1 },
    { 'year': 2020, 'month': 2 },
    { 'year': 2020, 'month': 3 },
  ]
}
