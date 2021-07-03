import { AlertComponent } from './shared/components/alert/alert.component';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import {
  ALERT_MODAL_MESSAGE,
  ALERT_OVERLAY_REF,
} from './shared/tokens/alert.tokens';

interface AlertModalConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  message?: string;
}

const DEFAULT_CONFIG: AlertModalConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'panel',
};

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private overlay: Overlay) {}
  overlayRef?: OverlayRef;

  openAlertModal(config: AlertModalConfig = {}) {
    if (!this.overlayRef) {
      const modalConfig = { ...DEFAULT_CONFIG, ...config };
      this.overlayRef = this.createOverlay(modalConfig);

      const injector = this.createInjector(config, this.overlayRef);
      const alertModalPortal = new ComponentPortal(
        AlertComponent,
        null,
        injector,
      );

      this.overlayRef.attach(alertModalPortal);

      this.overlayRef.backdropClick().subscribe(() => this.closeAlertModal());
    }
  }

  closeAlertModal() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = undefined;
    }
  }

  private getOverlayConfig(config: AlertModalConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }

  private createOverlay(config: AlertModalConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private createInjector(config: AlertModalConfig, overlayRef: OverlayRef) {
    return Injector.create({
      providers: [
        { provide: ALERT_OVERLAY_REF, useValue: overlayRef },
        { provide: ALERT_MODAL_MESSAGE, useValue: config.message },
      ],
    });
  }
}
