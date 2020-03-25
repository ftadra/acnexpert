import { Component, OnInit, Input } from '@angular/core';
import { FaqItem } from 'src/app/interfaces/faq.interface';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {
  @Input() item: FaqItem = null;
  public collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
