import { Component, OnInit } from '@angular/core';
import { PostService } from '@services/post.service';
import { Post } from '@interfaces/post';

@Component({
  selector: 'spf-posts-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  posts?: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
