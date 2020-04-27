import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() size: 'large' | 'regular';
  // tslint:disable-next-line: no-input-rename
  @Input('clear') isClear: boolean;
  // tslint:disable-next-line: no-input-rename
  @Input('outline') isOutline: boolean;
  // tslint:disable-next-line: no-input-rename
  @Input('inverted') isInverted: boolean;
  // tslint:disable-next-line: no-input-rename
  @Input('arrow') hasArrow: boolean;

  @Input() icon: ['fas' | 'fab', string];
  @Input() type: boolean;
  @Input() loading: boolean;
  @Input() disabled: boolean;

  constructor() { }
}
