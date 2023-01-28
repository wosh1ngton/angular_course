import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box2',
  templateUrl: './select-box2.component.html',
  styleUrls: ['./select-box2.component.css']
})
export class SelectBox2Component  {

  constructor() { }

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Telefone'}
  ]
  
  log(x:any) {console.log(x);}

  submit(f: any) {
    console.log(f);
  }

}
