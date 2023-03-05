import { Component } from '@angular/core';

@Component({
  selector: 'app-http-delete',
  templateUrl: './http-delete.component.html',
  styleUrls: ['./http-delete.component.css']
})
export class HttpDeleteComponent {
  codigoHttpClientDelete = {
    codigo: `
    deletePost(post: HTMLInputElement) {
      this.http.delete(this.url + '/' + post.id)
        .subscribe(response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);        
        })
    }
    `,
    titulo: 'Código 1 - HttpDelete',
    pagina: 'post.component.ts'
  };
}
