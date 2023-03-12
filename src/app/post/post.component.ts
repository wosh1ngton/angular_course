import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found.error';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostService) { }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value,

    };
    input.value = '';
    //post também retorna um observable, assim como todos os métodos HTTPClient
    this.service.create(post)
      .subscribe({
        next: (newPost: any) => {
          post.id = newPost.id;
          //para adicionar no início use splice, para o fim utilize push
          this.posts.splice(0, 0, post);
        },
        error: (e: AppError) => {
          if (e instanceof BadInput) {
            // this.form.setErrors(e) 
            // this.form.setErrors(e.originalError) 
          }
          else throw e;
        }
      })
  }

  updatePost(post: HTMLInputElement) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
  }

  deletePost(post: HTMLInputElement) {
    this.service.delete("88888")    
      .subscribe({
        next: () => {
          console.log('passou')
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        error: (e: AppError) => {
          console.log("error -> " + typeof(e));
          if (e instanceof NotFoundError) {
            console.log('NotFOund founded!')
            
          }
          else {throw e;}
        }
      })
  }


  ngOnInit(): void {
    this.service.getAll()
      .subscribe(response => this.posts = response);
      }
    }
