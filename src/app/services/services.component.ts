import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  menuServices = [
    { id: 1, link: 'servicos', nome: 'Serviços' },
    { id: 2, link: 'get', nome: 'HTTPClient.Get' },
    { id: 3, link: 'post', nome: 'HTTPClient.Post' },
    { id: 4, link: 'patch', nome: 'HTTPClient.Patch' },
    { id: 5, link: 'delete', nome: 'HTTPClient.Delete' },
    { id: 6, link: 'dataservice', nome: 'Data Service' },
  ]
}
