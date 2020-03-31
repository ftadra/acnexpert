import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      photo_id: ['', Validators.required],
      photo_left: ['', Validators.required],
      photo_right: ['', Validators.required],
      photo_front: ['', Validators.required],
      photo_back: [''],
      photo_chest: [''],
    });
  }

  submit() {
    const values = this.form.value;
    console.log(values);
  }

}
