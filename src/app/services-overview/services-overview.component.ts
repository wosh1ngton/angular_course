import { Component } from '@angular/core';

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.css']
})
export class ServicesOverviewComponent {
  postService = {
    codigo: `
    export class PostService {
      private url = 'https://jsonplaceholder.typicode.com/posts';
      constructor(private http: HttpClient) { }
    
      getPosts() {
        return this.http.get(this.url);
      }
    
      deletePost(id: string) {
        return this.http.delete(this.url + '/' + id);
      }
    
      updatePost(post:any) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
      }
    
      createPost(post:any) {
        return this.http.post(this.url, JSON.stringify(post));
      }
    }
    
    `,
    titulo: 'Código 1 - Serviço de acesso a dados',
    pagina: 'post.service.ts'
  };

  postComponent = {
    codigo: `
    export class PostComponent implements OnInit {
      posts: any[] = []; 
      
      constructor(private service: PostService) { }
    
      createPost(input: HTMLInputElement) {
        let post: any = {
          title: input.value,
         
        };
        input.value = '';
        //post também retorna um observable, assim como todos os métodos HTTPClient
        this.service.createPost(post)
          .subscribe((response: any) => {        
            post.id = response.id;
            //para adicionar no início use splice, para o fim utilize push
            this.posts.splice(0, 0, post);
          })
      }
    
      updatePost(post: HTMLInputElement) {
        this.service.updatePost(post)
          .subscribe(response => {
            console.log(response);
          })
      }
    
      deletePost(post: HTMLInputElement) {
        this.service.deletePost(post.id)
          .subscribe(response => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);        
          })
      }
      ngOnInit(): void {    
        this.service.getPosts()
          .subscribe(response => {
          this.posts = response as any;
        });
      }
    
    }
    `,
    titulo: 'Código 2 - Lógica de apresentação',
    pagina: 'post.component.ts'
  };
}
