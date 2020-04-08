import { Component, OnInit } from '@angular/core';
import { QuizModalComponent } from '../../modals/quiz/quiz.component';
import { ModalService } from '../../../../services/modal.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openQuiz() {
    this.modalService.open(QuizModalComponent);
  }
}
