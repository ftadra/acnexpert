import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

@Injectable()
export class ModalService {
    constructor(private domService: DomService) { }

    private modalElementId = 'modal-container';
    private overlayElementId = 'overlay';

    open(component: any, inputs?: object, outputs?: object) {
        const componentConfig = {
            inputs,
            outputs
        };

        this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
        document.getElementById(this.modalElementId).className = 'show';
        document.getElementById(this.overlayElementId).className = 'show';
        document.body.className = 'disableScroll';
    }

    destroy() {
        this.domService.removeComponent(this.modalElementId);
        document.getElementById(this.modalElementId).className = 'hidden';
        document.getElementById(this.overlayElementId).className = 'hidden';
        document.body.className = '';
    }
}
