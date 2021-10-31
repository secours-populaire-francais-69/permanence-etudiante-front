import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'spf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class CheckboxComponent implements OnInit {
  @Input() name: string = 'checkbox-name';
  @Input() label?: string = '';
  @Input() optional: boolean | string = false;

  ngOnInit() {
    this.optional = this.optional !== false;
  }
}
