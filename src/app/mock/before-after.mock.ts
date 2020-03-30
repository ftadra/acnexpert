import { BeforeAfterItem } from '../interfaces/before-after.interface';

export const MOCK_BEFORE_AFTER: BeforeAfterItem[] = [
  {
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
  }
];
