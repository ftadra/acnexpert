import { Component, OnInit } from '@angular/core';
import { FaqItem } from '../../interfaces/faq.interface';
import { MOCK_FAQ } from '../../mock/faq.mock';

@Component({
  selector: 'app-accutane',
  templateUrl: './accutane.component.html',
  styleUrls: ['./accutane.component.scss']
})
export class AccutaneComponent implements OnInit {
  public faq: FaqItem[] = [];

  constructor() { }

  ngOnInit() {
    this.loadFAQ();
  }

  loadFAQ() {
    const faqData = MOCK_FAQ;
    this.faq = faqData.find(item => item.title === 'Accutane').items;
  }

}
