import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { ActionType } from 'src/app/shared/models/action.modal';
import { CardType } from 'src/app/shared/models/card-type.model';
import { Card } from 'src/app/shared/models/card.model';
import { Citizen } from 'src/app/shared/models/citizen.model';
import {
  GAME_ACTION_MODAL_ACTION_TYPE,
  GAME_ACTION_MODAL_CITIZENS,
  GAME_ACTION_MODAL_CLOSE,
  GAME_ACTION_MODAL_MY_CITIZEN,
  GAME_ACTION_MODAL_OPEN_IDLE,
  GAME_ACTION_MODAL_RESULT_MESSAGE,
  GAME_ACTION_MODAL_ROOM_CODE,
} from 'src/app/shared/tokens/game-action.tokens';
import { GameService } from '../game.service';

@Component({
  selector: 'game-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class GameActionComponent {
  constructor(
    @Inject(GAME_ACTION_MODAL_CITIZENS) public citizens: Citizen[],
    @Inject(GAME_ACTION_MODAL_CLOSE) public closeModal: () => void,
    @Inject(GAME_ACTION_MODAL_ROOM_CODE) public roomCode: string,
    @Inject(GAME_ACTION_MODAL_ACTION_TYPE) public actionType: ActionType,
    @Inject(GAME_ACTION_MODAL_MY_CITIZEN) public myCitizen: Citizen,
    @Inject(GAME_ACTION_MODAL_RESULT_MESSAGE) public gameResultMessage: string,
    @Inject(GAME_ACTION_MODAL_OPEN_IDLE) public openIdleModal: () => void,
    private gameService: GameService,
    private router: Router,
  ) {}

  get actionListItems() {
    switch (this.actionType) {
      case ActionType.MafiaKill:
      case ActionType.PoliceCheck:
      case ActionType.CivilKill:
        return this.citizens;
      case ActionType.CardReveal:
        return this.myCitizen.cards;
      case ActionType.GameFinished:
        return [];
    }
  }

  get actionTitle() {
    if (this.policeCheckResult) {
      return this.cardType2String(this.policeCheckResult.cardType);
    }
    switch (this.actionType) {
      case ActionType.MafiaKill:
        return 'Кого убить?';
      case ActionType.PoliceCheck:
        return 'Кого проверить?';
      case ActionType.CardReveal:
        return 'Вскройте карту';
      case ActionType.CivilKill:
        return 'Кого осудить?';
      case ActionType.GameFinished:
        return 'Игра окончена';
    }
  }

  selected: Citizen;
  selectedCardIndex: number;

  actionTypeEnum = ActionType;
  policeCheckResult: Card;

  onCitizenSelect(citizen: Citizen) {
    if (this.isCitizenDead(citizen)) {
      return;
    }
    this.selected = citizen;
  }
  onCardSelect(cardIndex: number) {
    if (this.myCitizen.cards[cardIndex].isRevealed) {
      return;
    }
    this.selectedCardIndex = cardIndex;
  }
  onKill() {
    if (this.actionType == ActionType.MafiaKill) {
      this.gameService
        .killByMafia(this.roomCode, this.selected.name)
        .subscribe(() => void 0);
    } else {
      this.gameService
        .killByCivil(this.roomCode, this.selected.name)
        .subscribe(() => void 0);
    }
    this.openIdleModal();
    this.closeModal();
  }

  onPoliceCheck(cardIndex: number) {
    this.gameService
      .policeCheck(this.roomCode, this.selected.name, String(cardIndex))
      .subscribe((card) => {
        this.policeCheckResult = card;
        setTimeout(() => this.openIdleModal(), 2000);
      });
  }

  onCardReveal() {
    this.gameService
      .cardReveal(this.roomCode, this.myCitizen.name, this.selectedCardIndex)
      .subscribe(() => void 0);
    this.openIdleModal();
    this.closeModal();
  }
  onGameFinished() {
    this.router.navigate(['']);
    this.closeModal();
  }

  isCitizenDead(citizen: Citizen) {
    return citizen.cards.every((card) => card.isRevealed);
  }

  cardType2String(cardType: CardType) {
    switch (cardType) {
      case CardType.CIVIL:
        return 'Мирный житель';
      case CardType.MAFIA:
        return 'Мафия';
      case CardType.POLICE:
        return 'Комиссар';
    }
  }
}
