import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentStep = 3;
  private availableSteps = {
    0: 'create',
    1: 'clinical',
    2: 'billing',
    3: 'photos',
    4: 'thanks',
    5: 'dashboard',
    6: 'complete'
  };

  constructor() { }

  public getLoggedInUser(): boolean {
    return true;
  }

  public isCurrentStep(step: string): boolean {
    return step === this.availableSteps[this.currentStep];
  }

  public getCurrentStep(): string {
    return this.availableSteps[this.currentStep];
  }
}
