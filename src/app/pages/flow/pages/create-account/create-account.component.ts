import { Component, OnInit } from '@angular/core';
import { MOCK_STATE } from '../../../../mock/state.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { ApiPatientService } from '../../../../api/patient.service';
import { Patient } from 'src/app/interfaces/patient.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  public genderOptions: string[] = ['Male', 'Female'];
  public stateOptions: string[] = MOCK_STATE;

  public form: FormGroup;
  public loading = false;
  public valid = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private api: ApiPatientService
  ) { }

  ngOnInit() {
    this.initForm();

    const user = this.userService.user$.value;
    if (user) {
      const nameFormControl = this.form.controls.name;
      nameFormControl.setValue(user.name);
      nameFormControl.disable();
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      birthday: [null, Validators.required],
      gender: ['', Validators.required],
      weigth: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      pharmacy_name: ['', Validators.required],
      pharmacy_address: ['', Validators.required],
      social_security: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  submit() {
    this.loading = true;

    const payload: Patient = {
      date_of_birth: this.form.controls.birthday.value.formatted,
      gender: this.getGenderValue(),
      ssn: this.form.controls.social_security.value,
      address: this.form.controls.address.value,
      ph_name: this.form.controls.pharmacy_name.value,
      ph_address: this.form.controls.pharmacy_address.value,
      weigth: this.form.controls.weigth.value,
      state: this.form.controls.state.value,
      phone: this.form.controls.phone.value,
    };

    this.api.postPatient(payload)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  private getGenderValue(): 'M' | 'F' {
    const value: string = this.form.controls.gender.value;
    return value.charAt(0) === 'M' ? 'M' : 'F';
  }
}
