import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-intake-view',
  templateUrl: './weekly-intake-view.component.html',
  styleUrls: ['./weekly-intake-view.component.scss']
})
export class WeeklyIntakeViewComponent implements OnInit {
  @Input() days: number[] = [];
  availableDays: string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  constructor() { }

  ngOnInit() {
  }

}
