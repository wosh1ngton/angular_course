import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
