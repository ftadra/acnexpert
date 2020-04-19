import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { QuizModalComponent } from '../../modals/quiz/quiz.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HomeHowItWorksComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openQuiz() {
    this.modalService.open(QuizModalComponent);
  }
}
