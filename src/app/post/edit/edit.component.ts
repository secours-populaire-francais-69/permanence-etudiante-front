import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@services/post.service';
import { Post } from '@interfaces/post';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  postForm = new FormGroup({
    id: new FormControl(null),
    content: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    isForVolunteers: new FormControl(false),
  });

  constructor(
    private postsService: PostService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.params.postId;
    this.initForm(postId);
  }

  initForm(postId: string) {
    this.postsService.find(postId).subscribe((post: Post) => {
      this.postForm.controls.id.setValue(post.id);
      this.postForm.controls.content.setValue(post.content);
      this.postForm.controls.title.setValue(post.title);
      this.postForm.controls.isForVolunteers.setValue(post.isForVolunteers);
    });
  }

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }
    this.postsService.update(this.postForm.value).subscribe(() => {
      this.toastr.success('Mise à jour réussi!');
      this.router.navigate(['../'], {
        relativeTo: this.route,
      });
    });
  }
}
