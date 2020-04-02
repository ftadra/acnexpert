import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MOCK_STATE } from '../../../../mock/state.mock';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileModalComponent implements OnInit {

  public genderOptions: string[] = ['Male', 'Female'];
  public stateOptions: string[] = MOCK_STATE;

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      confirm_password: ['', Validators.required],
      name: ['', Validators.required],
      birthday: [null, Validators.required],
      gender: ['', Validators.required],
      weight: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  submit() {
    const values = this.form.value;
    console.log(values);
    this.close();
  }

}
