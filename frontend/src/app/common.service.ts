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
  GAME_ACTION_MODAL_ACTION_TYPE,
  GAME_ACTION_MODAL_CITIZENS,
  GAME_ACTION_MODAL_CLOSE,
  GAME_ACTION_MODAL_MY_CITIZEN,
  GAME_ACTION_MODAL_OPEN_IDLE,
  GAME_ACTION_MODAL_RESULT_MESSAGE,
  GAME_ACTION_MODAL_ROOM_CODE,
} from './shared/tokens/game-action.tokens';
import { GameActionComponent } from './game/action/action.component';
import { IdleComponent } from './game/idle/idle.component';
import { ActionType } from './shared/models/action.modal';

interface ModalConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

interface AlertModalConfig extends ModalConfig {
  message?: string;
}

interface ActionModalConfig extends ModalConfig {
  citizens?: Citizen[];
  roomCode?: string;
  actionType: ActionType;
  myCitizen: Citizen;
  gameResultMessage?: string;
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
  actionOverlayRef?: OverlayRef;
  idleOverlayRef?: OverlayRef;

  openIdleModal() {
    if (!this.idleOverlayRef) {
      const config: ModalConfig = { backdropClass: 'purple-backdrop' };
      const modalConfig = { ...DEFAULT_CONFIG, ...config };
      this.idleOverlayRef = this.createOverlay(modalConfig);

      const idleModalPortal = new ComponentPortal(IdleComponent);
      this.idleOverlayRef.attach(idleModalPortal);
    }
  }
  closeIdleModal() {
    if (this.idleOverlayRef) {
      this.idleOverlayRef.dispose();
      this.idleOverlayRef = null;
    }
  }

  openGameActionModal(config: ActionModalConfig) {
    if (!this.actionOverlayRef) {
      const modalConfig = { ...DEFAULT_CONFIG, ...config };
      this.actionOverlayRef = this.createOverlay(modalConfig);

      const injector = this.createKillInjector(config);
      const killModalPortal = new ComponentPortal(
        GameActionComponent,
        null,
        injector,
      );
      this.actionOverlayRef.attach(killModalPortal);
    }
  }

  closeGameActionModal() {
    if (this.actionOverlayRef) {
      this.actionOverlayRef.dispose();
      this.actionOverlayRef = null;
    }
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

  private createKillInjector(config: ActionModalConfig) {
    return Injector.create({
      providers: [
        { provide: GAME_ACTION_MODAL_CITIZENS, useValue: config.citizens },
        {
          provide: GAME_ACTION_MODAL_CLOSE,
          useValue: this.closeGameActionModal.bind(this),
        },
        {
          provide: GAME_ACTION_MODAL_ROOM_CODE,
          useValue: config.roomCode,
        },
        {
          provide: GAME_ACTION_MODAL_ACTION_TYPE,
          useValue: config.actionType,
        },
        {
          provide: GAME_ACTION_MODAL_MY_CITIZEN,
          useValue: config.myCitizen,
        },
        {
          provide: GAME_ACTION_MODAL_RESULT_MESSAGE,
          useValue: config.gameResultMessage,
        },
        {
          provide: GAME_ACTION_MODAL_OPEN_IDLE,
          useValue: this.openIdleModal.bind(this),
        },
      ],
    });
  }
}
