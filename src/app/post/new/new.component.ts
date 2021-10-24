import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@services/post.service';
import { ToastrService } from 'ngx-toastr';

// TODO: Content could be markdown (add a wysiwyg)
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {
  isSubmitting = false;
  postFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl(''),
    isForVolunteers: new FormControl(false),
  });

  constructor(
    private postService: PostService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.postFormGroup.valid) return;

    this.isSubmitting = true;
    this.postService.create(this.postFormGroup.value).subscribe(() => {
      this.isSubmitting = false;
      this.toastr.success('Enregistrement réussi !');
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
