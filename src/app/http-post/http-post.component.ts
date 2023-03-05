import { Component } from '@angular/core';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css']
})
export class HttpPostComponent {
  codigoHttpClientPost = {
    codigo: `
    createPost(input: HTMLInputElement) {
      let post: any = {
        title: input.value,
       
      };
      input.value = '';
      //post também retorna um observable, assim como todos os métodos HTTPClient
      this.http.post(this.url, JSON.stringify(post))
        .subscribe((response: any) => {        
          post.id = response.id;
          //para adicionar no início use splice, para o fim utilize push
          this.posts.splice(0, 0, post);
        })
    }
    `,
    titulo: 'Código 1 - post()',
    pagina: 'post.component.ts'

  };
}
