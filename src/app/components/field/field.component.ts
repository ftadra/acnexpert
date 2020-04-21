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
  // tslint:disable-next-line: max-line-length
  @Input() type: 'text' | 'boolean' | 'date' | 'email' | 'file' | 'multi' | 'password' | 'phone' | 'score' | 'select' | 'card' | 'cvc' | 'exp' | 'textarea' = 'text';
  @Input() description = '';
  @Input() options = [];
  @Input() icon: 'front' | 'back' | 'chest' | 'id' | 'left' | 'right' = null;
  // tslint:disable-next-line: no-input-rename
  @Input('disabled') isDisabled = false;

  value: any;

  // used for multi
  // tslint:disable-next-line: variable-name
  _checked = {};
  // tslint:disable-next-line: variable-name
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

  updateFileChanges(files: FileList) {
    this.value = files.item(0);
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

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}
