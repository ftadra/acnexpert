import { Component, OnInit } from '@angular/core';
import { BeforeAfterItem } from '../../../../interfaces/before-after.interface';
import { MOCK_BEFORE_AFTER } from '../../../../mock/before-after.mock';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class HomeBeforeAfterComponent implements OnInit {
  public currentIndex = 0;
  public data: BeforeAfterItem[] = MOCK_BEFORE_AFTER;

  constructor() { }

  ngOnInit() {
  }

}
