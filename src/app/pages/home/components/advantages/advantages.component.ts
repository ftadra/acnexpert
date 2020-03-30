import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class HomeAdvantagesComponent implements OnInit {
  public currentIndex = 1;
  public images = {
    1: '../../../../../assets/images/Illustration-7.svg',
    2: '../../../../../assets/images/Illustration-8.svg',
    3: '../../../../../assets/images/Illustration-9.svg',
    4: '../../../../../assets/images/Illustration-10.svg',
    5: '../../../../../assets/images/Illustration-11.svg',
    6: '../../../../../assets/images/Illustration-12.svg'
  };

  constructor() { }

  ngOnInit() {
  }

  public select(index) {
    this.currentIndex = index;
  }
}
