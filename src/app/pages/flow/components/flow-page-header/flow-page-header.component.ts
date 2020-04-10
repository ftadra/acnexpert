import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-page-header',
  templateUrl: './flow-page-header.component.html',
  styleUrls: ['./flow-page-header.component.scss']
})
export class FlowPageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() currentStep = 0;
  @Input() currentStepComplete = false;

  constructor() { }

  ngOnInit() {
  }

}
