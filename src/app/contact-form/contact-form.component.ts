import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Telefone'}
  ]
  firstName: string = '';
  ngOnInit(): void {
  }
  log(x:any) {console.log(x);}

  submit(f: any) {
    console.log(f);
  }
}
