import { OverlayRef } from '@angular/cdk/overlay';
import {
  ALERT_MODAL_MESSAGE,
  ALERT_OVERLAY_REF,
} from './../../../common.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  constructor(
    @Inject(ALERT_MODAL_MESSAGE) public message: string,
    @Inject(ALERT_OVERLAY_REF) private alertOverlayRef: OverlayRef,
  ) {}

  onDismissClick() {
    this.alertOverlayRef.detach();
  }
}
