import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'spf-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class TextareaComponent implements OnInit {
  @Input() name: string = 'textarea-name';
  @Input() label?: string = '';
  @Input() textareaStyle: string = '';
  @Input() optional: boolean | string = false;
  @Input() rows?: string;

  ngOnInit() {
    this.optional = this.optional !== false;
  }
}
