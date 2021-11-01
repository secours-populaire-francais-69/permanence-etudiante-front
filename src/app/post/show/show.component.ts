import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@services/post.service';
import { Post } from '@interfaces/post';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'spf-post-show',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  post$!: Observable<Post>;

  constructor(
    private postService: PostService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.params.postId;
    this.post$ = this.postService.find(postId);
  }

  delete(post: Post) {
    this.postService.delete(post.id).subscribe(() => {
      this.toastr.success(`L'évenement du ${post.title} a été supprimé!`);
      this.router.navigate(['../'], {
        relativeTo: this.route,
      });
    });
  }
}
