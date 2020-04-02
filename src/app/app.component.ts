import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService, private modalService: ModalService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  removeModal() {
    this.modalService.destroy();
  }
}
