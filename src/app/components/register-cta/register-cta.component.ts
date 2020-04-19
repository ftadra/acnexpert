import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { QuizModalComponent } from '../../pages/home/modals/quiz/quiz.component';

@Component({
  selector: 'app-register-cta',
  templateUrl: './register-cta.component.html',
  styleUrls: ['./register-cta.component.scss']
})
export class RegisterCtaComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openQuiz() {
    this.modalService.open(QuizModalComponent);
  }
}
