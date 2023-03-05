import { Component } from '@angular/core';

@Component({
  selector: 'app-http-patch',
  templateUrl: './http-patch.component.html',
  styleUrls: ['./http-patch.component.css']
})
export class HttpPatchComponent {
  codigoHttpClientPatch = {
    codigo: `
    updatePost(post: HTMLInputElement) {
      this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
        .subscribe(response => {
          console.log(response);
        })
    }
    `,
    titulo: 'Código 1 - HttpClient patch',
    pagina: 'post.component.ts'
  };
}
