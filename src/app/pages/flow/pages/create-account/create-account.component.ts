import { Component, OnInit } from '@angular/core';
import { MOCK_STATE } from '../../../../mock/state.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  public genderOptions: string[] = ['Male', 'Female'];
  public stateOptions: string[] = MOCK_STATE;

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      confirm_password: ['', Validators.required],
      name: ['', Validators.required],
      birthday: [null, Validators.required],
      gender: ['', Validators.required],
      weight: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      pharmacy_name: ['', Validators.required],
      pharmacy_address: ['', Validators.required],
      social_security: ['', [Validators.required, Validators.min(4), Validators.max(4)]],
    }, { validator: this.checkPasswords });
  }

  submit() {
    const values = this.form.value;
    console.log(values);
  }

  private checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirm_password').value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
