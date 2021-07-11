import { Component, Inject } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ActionType } from 'src/app/shared/models/action.modal';
import { CardType } from 'src/app/shared/models/card-type.model';
import { Card } from 'src/app/shared/models/card.model';
import { Citizen } from 'src/app/shared/models/citizen.model';
import {
  GAME_ACTION_MODAL_ACTION_TYPE,
  GAME_ACTION_MODAL_CITIZENS,
  GAME_ACTION_MODAL_CLOSE,
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
    private gameService: GameService,
    private commonService: CommonService,
  ) {}

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
        return 'Вскройте карту?';
      case ActionType.CivilKill:
        return 'Кого осудить?';
    }
  }

  selected: Citizen;
  actionTypeEnum = ActionType;
  policeCheckResult: Card;

  onSelect(citizen: Citizen) {
    this.selected = citizen;
  }

  onKill() {
    this.gameService
      .kill(this.roomCode, this.selected.name)
      .subscribe(() => void 0);
    this.commonService.openIdleModal();
    this.closeModal();
  }

  onPoliceCheck(cardIndex: number) {
    this.gameService
      .policeCheck(this.roomCode, this.selected.name, String(cardIndex))
      .subscribe((card) => {
        this.policeCheckResult = card;
      });
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
