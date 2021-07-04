import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '@services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  postForm = new FormGroup({
    content: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    isForVolunteers: new FormControl(false),
  });

  constructor(
    private postService: PostService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }
    this.postService.create(this.postForm.value).subscribe(() => {
      this.toastr.success('Enregistrement réussi!');
    });
  }
}
