import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'spf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent implements OnInit {
  @Input() name: string = 'input-name';
  @Input() label?: string = '';
  @Input() type: string = 'text';
  @Input() inputStyle: string = '';
  @Input() optional: boolean | string = false;

  ngOnInit() {
    this.optional = this.optional !== false;
  }
}
