import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Post } from '@interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Post[]>(`${environment.api}posts`);
  }

  create(post: Post) {
    return this.http.post<{ post: Post }>(`${environment.api}posts`, {
      post,
    });
  }

  update(post: Post) {
    return this.http.put<{ post: Post }>(`${environment.api}posts/${post.id}`, {
      post,
    });
  }

  find(postId: string) {
    return this.http.get<Post>(`${environment.api}posts/${postId}`);
  }
}
