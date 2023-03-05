import { Component } from '@angular/core';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent {
  codigoHttpClientGet = {
    codigo: `
    export class PostComponent implements OnInit {
      posts: any[] = [];
      constructor(http: HttpClient) {
          http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(response => {
              this.posts = response as any;
            });
       }   
      
    }    
    `,
    titulo: 'Código 1 - Chamada ao método get()',
    pagina: 'post.component.ts'

  };
}
