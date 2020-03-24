import { Component, OnInit } from '@angular/core';
import { BeforeAfterItem } from 'src/app/interfaces/before-after.interface';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements OnInit {
  public currentIndex = 0;
  public data: BeforeAfterItem[] = [{
    name: 'Josiah\'s Treatment',
    age: 19,
    occupation: 'Student',
    // tslint:disable-next-line: max-line-length
    story: 'Josiah had severe facial acne and hated how it looked. Thanks to Accutane, he has a whole new level of self-esteem and confidence!',
    images: {
      before: '../../../../../assets/images/examples/before.png',
      after: '../../../../../assets/images/examples/after.png'
    },
    clinical: {
      acne_free: '5 months',
      body_part: 'body',
      dosage: '40mg twice a day'
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
