import { Component, OnInit } from '@angular/core';
import { FaqGroup } from '../../interfaces/faq.interface';
import { MOCK_FAQ } from '../../mock/faq.mock';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public groups: FaqGroup[] = MOCK_FAQ;

  constructor() { }

  ngOnInit() {
  }

}
