import { OverlayRef } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

export const ALERT_MODAL_MESSAGE = new InjectionToken<string>(
  'ALERT_MODAL_MESSAGE',
);
export const ALERT_OVERLAY_REF = new InjectionToken<OverlayRef>(
  'ALERT_OVERLAY_REF',
);
