import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { PharmacyModalComponent } from '../../modals/pharmacy/pharmacy.component';
import { ProfileModalComponent } from '../../modals/profile/profile.component';
import { SubscriptionsModalComponent } from '../../modals/subscriptions/subscriptions.component';
import { FollowUpModalComponent } from '../../modals/follow-up/follow-up.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  weeklyDosage: number[] = [1, 2, 3];

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  editPharmacy() {
    this.modalService.open(PharmacyModalComponent);
  }

  editProfile() {
    this.modalService.open(ProfileModalComponent);
  }

  editSubscription() {
    this.modalService.open(SubscriptionsModalComponent);
  }

  startFollowUp() {
    this.modalService.open(FollowUpModalComponent);
  }
}
