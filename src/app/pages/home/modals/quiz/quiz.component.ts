import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { QuestionnaireForm, QuestionnaireField } from '../../../../interfaces/questionnaire.interface';
import { MOCK_QUIZ } from '../../../../mock/quiz.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-modal',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizModalComponent implements OnInit {
  tab: 'welcome' | 'quiz' | 'elegible' | 'other' = 'welcome';

  questions: QuestionnaireForm[] = MOCK_QUIZ;
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
      case 'welcome':
        this.close();
        break;
      case 'quiz':
        if (this.quizTab === 0) {
          this.tab = 'welcome';
        } else {
          this.quizTab--;
        }
        break;
      case 'elegible':
      case 'other':
        this.tab = 'quiz';
        break;
    }
  }

  public next() {
    switch (this.tab) {
      case 'welcome':
        this.tab = 'quiz';
        break;
      case 'quiz':
        if (this.quizTab + 1 < this.questions.length) {
          this.quizTab++;
        } else if (this.isElegible) {
          this.tab = 'elegible';
        } else {
          this.tab = 'other';
        }
        break;
      case 'elegible':
      case 'other':
        this.close();
        break;
    }
  }

  private initForm() {
    const form = {};

    this.questions.forEach((group: QuestionnaireForm) => {
      group.content.forEach((item: QuestionnaireField) => {
        form[item.key] = ['', Validators.required];
      });
    });

    this.form = this.formBuilder.group(form);
  }
}
