import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { CreditCardValidator } from 'angular-cc-library';

@Component({
  selector: 'app-subscriptions-modal',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsModalComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  close() {
    this.modalService.destroy();
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
    this.close();
  }
}
