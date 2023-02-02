import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
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
