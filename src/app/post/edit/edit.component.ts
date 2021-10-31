import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@services/post.service';
import { Post } from '@interfaces/post';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'spf-post-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  isSubmitting = false;
  postId?: number;
  postFormGroup = new FormGroup({
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
    this._initForm(postId);
  }

  _initForm(postId: string) {
    this.postsService.find(postId).subscribe((post: Post) => {
      this.postFormGroup.controls.id.setValue(post.id);
      this.postFormGroup.controls.content.setValue(post.content);
      this.postFormGroup.controls.title.setValue(post.title);
      this.postFormGroup.controls.isForVolunteers.setValue(
        post.isForVolunteers
      );
    });
  }

  delete() {
    const { postId } = this.route.snapshot.params;
    console.log(postId);
    this.postsService.delete(postId).subscribe(() => {
      this.toastr.success(`L'article a été supprimé !`);
      this.router.navigate(['/posts']);
    });
  }

  onSubmit() {
    if (!this.postFormGroup.valid) return;

    this.isSubmitting = true;
    this.postsService.update(this.postFormGroup.value).subscribe(() => {
      this.isSubmitting = false;
      this.toastr.success('Modification réussie !');
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
