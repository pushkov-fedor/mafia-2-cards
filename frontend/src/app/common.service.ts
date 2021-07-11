import { AlertComponent } from './shared/components/alert/alert.component';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import {
  ALERT_MODAL_MESSAGE,
  ALERT_OVERLAY_REF,
} from './shared/tokens/alert.tokens';
import { Citizen } from './shared/models/citizen.model';
import {
  KILL_MODAL_CITIZENS,
  KILL_MODAL_CLOSE,
} from './shared/tokens/kill.tokens';
import { KillComponent } from './game/kill/kill.component';

interface ModalConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

interface AlertModalConfig extends ModalConfig {
  message?: string;
}

interface KillModalConfig extends ModalConfig {
  citizens?: Citizen[];
}

const DEFAULT_CONFIG: ModalConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'panel',
};

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private overlay: Overlay) {}
  alertOverlayRef?: OverlayRef;
  killOverlayRef?: OverlayRef;

  openGameKillModal(config: KillModalConfig = {}) {
    if (!this.killOverlayRef) {
      const modalConfig = { ...DEFAULT_CONFIG, ...config };
      this.killOverlayRef = this.createOverlay(modalConfig);

      const injector = this.createKillInjector(config);
      const killModalPortal = new ComponentPortal(
        KillComponent,
        null,
        injector,
      );
      this.killOverlayRef.attach(killModalPortal);
    }
  }

  closeGameKillModal() {
    this.killOverlayRef.dispose();
    this.killOverlayRef = null;
  }

  openAlertModal(config: AlertModalConfig = {}) {
    const modalConfig = { ...DEFAULT_CONFIG, ...config };
    this.alertOverlayRef = this.createOverlay(modalConfig);

    const injector = this.createAlertInjector(config, this.alertOverlayRef);
    const alertModalPortal = new ComponentPortal(
      AlertComponent,
      null,
      injector,
    );

    this.alertOverlayRef.attach(alertModalPortal);

    this.alertOverlayRef
      .backdropClick()
      .subscribe(() => this.closeAlertModal());
  }

  closeAlertModal() {
    if (this.alertOverlayRef) {
      this.alertOverlayRef.dispose();
      this.alertOverlayRef = undefined;
    }
  }

  private getOverlayConfig(config: ModalConfig): OverlayConfig {
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

  private createOverlay(config: ModalConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private createAlertInjector(
    config: AlertModalConfig,
    overlayRef: OverlayRef,
  ) {
    return Injector.create({
      providers: [
        { provide: ALERT_OVERLAY_REF, useValue: overlayRef },
        { provide: ALERT_MODAL_MESSAGE, useValue: config.message },
      ],
    });
  }

  private createKillInjector(config: KillModalConfig) {
    return Injector.create({
      providers: [
        { provide: KILL_MODAL_CITIZENS, useValue: config.citizens },
        {
          provide: KILL_MODAL_CLOSE,
          useValue: this.closeGameKillModal.bind(this),
        },
      ],
    });
  }
}
