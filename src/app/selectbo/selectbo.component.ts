import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectbo',
  templateUrl: './selectbo.component.html',
  styleUrls: ['./selectbo.component.css']
})
export class SelectboComponent  {
  constructor() { }

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Telefone'}
  ]
  
  log(x:any) {console.log('hey'+x);}

  submit(f: any) {
    console.log(f);
  }

}
