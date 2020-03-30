import { Component, OnInit } from '@angular/core';
import { MOCK_CLINICAL_DETAILS } from '../../../../mock/clinical-details.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionnaireField, QuestionnaireForm } from 'src/app/interfaces/questionnaire.interface';

@Component({
  selector: 'app-clinical-details',
  templateUrl: './clinical-details.component.html',
  styleUrls: ['./clinical-details.component.scss']
})
export class ClinicalDetailsComponent implements OnInit {
  public fields: QuestionnaireForm[] = MOCK_CLINICAL_DETAILS;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const form = {};

    this.fields.forEach((group: QuestionnaireForm) => {
      group.content.forEach((item: QuestionnaireField) => {
        form[item.key] = ['', Validators.required];
      });
    });

    this.form = this.formBuilder.group(form);
  }

  submit() {
    const values = this.form.value;
    console.log(values);
  }
}
