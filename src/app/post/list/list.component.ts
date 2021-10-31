import { Component, OnInit } from '@angular/core';
import { PostService } from '@services/post.service';
import { Post } from '@interfaces/post';
import { ApiStatus } from '@interfaces/api';

@Component({
  selector: 'spf-posts-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  posts?: Post[];
  apiStatus: ApiStatus = 'idle';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.apiStatus = 'loading';
    this.postService.getAll().subscribe((posts) => {
      if (!posts) this.apiStatus = 'empty';

      this.posts = posts.reverse();
      this.apiStatus = 'success';
    });
  }
}
