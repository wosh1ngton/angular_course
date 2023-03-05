import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-auth',
  templateUrl: './overview-auth.component.html',
  styleUrls: ['./overview-auth.component.css']
})
export class OverviewAuthComponent {
  codigoDbJson = {
    codigo: `
    {
      "users": [
          {
          "id": 1,   
          "username": "wos",
          "password": "1234",
          "admin": false
          },
          {
           "id": 2,  
           "username": "Charline",
           "password": "1111",
           "admin": true  
          }
      ],
      "orders" : [
          {
              "id": 1,
              "item": "soap",
              "quantidade": 8
          }
          
      ]
  }
    `,
    titulo: 'Código 1 - Criando a base de dados',
    pagina: 'db.json'
  };
}
