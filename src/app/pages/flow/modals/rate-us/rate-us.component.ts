import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-rate-us-modal',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.scss']
})
export class RateUsModalComponent implements OnInit {
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
      score: ['', Validators.required],
      feedback: ['', Validators.required],
      allow_share__photos: ['']
    });
  }

  submit() {
    const values = this.form.value;
    console.log(values);
    this.close();
  }
}
