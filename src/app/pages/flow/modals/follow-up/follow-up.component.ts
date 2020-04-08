import { Component, OnInit } from '@angular/core';
import { QuestionnaireForm, QuestionnaireField } from '../../../../interfaces/questionnaire.interface';
import { MOCK_FOLLOW_UP } from '../../../../mock/follow-up.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-follow-up-modal',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.scss']
})
export class FollowUpModalComponent implements OnInit {
  tab: 'questions' | 'photos' | 'finish' = 'questions';

  questions: QuestionnaireForm[] = MOCK_FOLLOW_UP;
  form: FormGroup;

  quizTab = 0;
  maxTabs = 2;
  isElegible = true;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.maxTabs += this.questions.length;
    this.initForm();
  }

  public close() {
    this.modalService.destroy();
  }

  public back() {
    switch (this.tab) {
      case 'questions':
        if (this.quizTab > 0) {
          this.quizTab--;
        } else {
          this.close();
        }
        break;
      case 'photos':
        this.tab = 'questions';
        break;
      case 'finish':
        this.tab = 'photos';
        break;
    }
  }

  public next() {
    switch (this.tab) {
      case 'questions':
        if (this.quizTab + 1 < this.questions.length) {
          this.quizTab++;
        } else {
          this.tab = 'photos';
        }
        break;
      case 'photos':
        this.tab = 'finish';
        break;
      case 'finish':
        this.close();
        break;
    }
  }

  private initForm() {
    const form = {
      photo_id: ['', Validators.required],
      photo_left: ['', Validators.required],
      photo_right: ['', Validators.required],
      photo_front: ['', Validators.required],
      photo_back: [''],
      photo_chest: [''],
      call_prior_renewal: ['', Validators.required],
      comments: [''],
    };

    this.questions.forEach((group: QuestionnaireForm) => {
      group.content.forEach((item: QuestionnaireField) => {
        form[item.key] = ['', Validators.required];
      });
    });

    this.form = this.formBuilder.group(form);
  }
}
