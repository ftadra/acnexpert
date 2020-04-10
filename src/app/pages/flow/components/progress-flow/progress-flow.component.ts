import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-flow',
  templateUrl: './progress-flow.component.html',
  styleUrls: ['./progress-flow.component.scss']
})
export class ProgressFlowComponent implements OnInit {
  @Input() currentStep = 0;
  @Input() currentStepComplete = false;
  @Input() description = '';

  steps: string[] = ['Sign up', 'Profile Setup', 'Meet Your Doctor', 'Treatment', 'Check In'];

  constructor() { }

  ngOnInit() {
  }

}
