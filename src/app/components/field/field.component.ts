import { Component, OnInit, Input, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldComponent),
      multi: true
    }
  ]
})
export class FieldComponent implements ControlValueAccessor, OnInit {
  @HostBinding('class.c-field') isField = true;

  @Input() key = '';
  @Input() title = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'boolean' | 'date' | 'email' | 'multi' | 'password' | 'phone' | 'score' | 'select' | 'textarea' = 'text';
  @Input() description = '';
  @Input() options = [];

  value: any;

  // used for multi
  _checked = {};
  _scores = Array(10).fill(0);

  public dateOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  onChange: (_: any) => void = (_: any) => { };
  onTouched: () => void = () => { };

  constructor() { }

  ngOnInit() {
    if (!this.key) {
      this.key = this.title.split(' ').join('');
    }

    if (!this.placeholder) {
      this.placeholder = '';
    }
  }

  setCheckedValues() {
    this.value = Object.keys(this._checked).map(index => {
      return this.options[index];
    });
    this.updateChanges();
  }

  // basic
  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: number): void {
    this.value = value;

    if (this.type === 'multi' && Array.isArray(this.value)) {
      this._checked = this.value.reduce((acc, item) => {
        const index = this.options.indexOf(item);
        acc[index] = true;
        return acc;
      }, {});
    }

    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
