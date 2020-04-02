import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-pharmacy-modal',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyModalComponent implements OnInit {
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
      pharmacy_name: ['', Validators.required],
      pharmacy_address: ['', Validators.required],
      social_security: ['', [Validators.required, Validators.min(4), Validators.max(4)]]
    });
  }

  submit() {
    const values = this.form.value;
    console.log(values);
    this.close();
  }
}
