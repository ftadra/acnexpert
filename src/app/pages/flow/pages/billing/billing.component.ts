import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidator } from 'angular-cc-library';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      card_holder_name: [''],
      card_number: ['', [CreditCardValidator.validateCCNumber]],
      exp_date: ['', [CreditCardValidator.validateExpDate]],
      security_code: ['', [Validators.minLength(3), Validators.maxLength(4)]],
      birthday: [null],
      billing_address: [''],
      zip_code: ['']
    });
  }

  submit() {
    const values = this.form.value;
    console.log(values);
  }

}
