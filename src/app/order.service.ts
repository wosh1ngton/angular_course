import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    
    // let headers = new HttpHeaders;
    // let token = localStorage.getItem('access_token');


    // headers.append('Authorization', 'Bearer ' + token);  
    
    // return this.http.get('http://localhost:3000/api/orders', {'headers': headers});

    return this.http.get('http://localhost:3000/api/orders');
  }
}
