import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { RoomService } from 'src/app/room/room.service';
import { CardType } from 'src/app/shared/models/card-type.model';
import { Card } from 'src/app/shared/models/card.model';
import { Citizen } from 'src/app/shared/models/citizen.model';
import { Day } from 'src/app/shared/models/day.model';
import { Game } from 'src/app/shared/models/game.model';
import { GameService } from '../game.service';
import * as _ from 'lodash';
import { DayStage } from 'src/app/shared/models/day-stage.model';
import { CommonService } from 'src/app/common.service';
import { ActionType } from 'src/app/shared/models/action.modal';
import { Howl } from 'howler';
import { Router } from '@angular/router';
import { GameStatus } from 'src/app/shared/models/game-status.model';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  constructor(
    private roomService: RoomService,
    private gameService: GameService,
    private commonService: CommonService,
    private router: Router,
  ) {}

  dayStage = DayStage;
  roomCode: string;
  playerName: string;

  game: Game;

  timerSub: Subscription;

  get citizen(): Citizen {
    return this.game?.citizens.find(
      (citizen) => citizen.name == this.playerName,
    );
  }
  get isAlive() {
    if (!this.citizen) {
      return true;
    }
    return this.citizen?.cards.some((card) => !card.isRevealed);
  }
  get cards(): Card[] {
    return this.citizen?.cards ?? [];
  }
  get days(): Day[] {
    return this.game?.days ?? [];
  }
  get currentDay(): Day {
    return _.last(this.days);
  }
  get daysReversed(): Day[] {
    return [...this.days].reverse();
  }
  get isMafia() {
    return this.citizen.cards.some(
      (card) => card.cardType == CardType.MAFIA && !card.isRevealed,
    );
  }
  get isPolice() {
    return this.citizen.cards.some(
      (card) => card.cardType == CardType.POLICE && !card.isRevealed,
    );
  }
  get shouldRevealCard() {
    return this.citizen.shouldRevealCard;
  }
  get civilVotes() {
    return this.game?.civilVotes;
  }
  get numberOfAliveCivils() {
    return this.game?.citizens.filter((citizen) =>
      citizen.cards.some((card) => !card.isRevealed),
    ).length;
  }
  get currentDayStageValue() {
    return this.currentDayStage.getValue();
  }
  get startNightBtnText() {
    return this.civilVotes > 0
      ? `НАЧАТЬ НОЧЬ (${this.civilVotes}/${this.numberOfAliveCivils})`
      : 'НАЧАТЬ НОЧЬ';
  }
  get startJudgeBtnText() {
    return this.civilVotes > 0
      ? `НАЧАТЬ СУД (${this.civilVotes}/${this.numberOfAliveCivils})`
      : 'НАЧАТЬ СУД';
  }

  isCardsVisible = true;

  startNightRequestSend = false;
  startJudgeRequestSend = false;

  currentDayStage = new BehaviorSubject<DayStage>(null);

  ngOnInit() {
    const room = this.roomService.room.getValue();
    const player = this.roomService.player.getValue();
    if (!room) {
      this.router.navigate(['']);
      return;
    }
    this.roomCode = room.code;
    this.playerName = player.name;

    this.timerSub = timer(0, 1000)
      .pipe(switchMap(() => this.gameService.getGameStatus(this.roomCode)))
      .subscribe((game: Game) => {
        this.game = game;
        if (this.game.gameStatus == GameStatus.FINISHED) {
          this.commonService.closeIdleModal();
          this.commonService.closeGameActionModal();
          this.commonService.openGameActionModal({
            citizens: this.game.citizens,
            roomCode: this.game.roomCode,
            backdropClass: 'purple-backdrop',
            actionType: ActionType.GameFinished,
            myCitizen: this.citizen,
            gameResultMessage: this.game.gameResultMessage,
          });
          this.timerSub?.unsubscribe();
        } else {
          this.currentDayStage.next(
            this.currentDay.dayRoutine[this.currentDay.currentStageIndex],
          );
        }
      });

    this.currentDayStage
      .pipe(
        filter((stage) => stage != null),
        distinctUntilChanged(),
      )
      .subscribe((stage) => {
        if (!this.isAlive) {
          this.commonService.closeIdleModal();
          this.commonService.closeGameActionModal();
          return;
        }
        switch (stage) {
          case DayStage.CitizenWelcome:
            this.startNightRequestSend = false;
            this.startJudgeRequestSend = false;
            this.commonService.closeIdleModal();
            this.commonService.closeGameActionModal();
            break;
          case DayStage.MafiaKill:
            if (this.isMafia) {
              this.commonService.openGameActionModal({
                citizens: this.game.citizens,
                roomCode: this.game.roomCode,
                backdropClass: 'purple-backdrop',
                actionType: ActionType.MafiaKill,
                myCitizen: this.citizen,
              });
            } else {
              this.commonService.openIdleModal();
            }
            setTimeout(() => {
              const sound = new Howl({
                src: ['../../../assets/sueta.mp3'],
              });
              sound.play();
            });
            break;
          case DayStage.PoliceCheck:
            if (this.isPolice) {
              setTimeout(() => {
                this.commonService.openGameActionModal({
                  citizens: this.game.citizens,
                  roomCode: this.game.roomCode,
                  backdropClass: 'purple-backdrop',
                  actionType: ActionType.PoliceCheck,
                  myCitizen: this.citizen,
                });
              }, 2 * 3000);
            } else {
              this.commonService.openIdleModal();
            }
            setTimeout(() => {
              const sound = new Howl({
                src: ['../../../assets/prokuror.mp3'],
              });
              sound.play();
            }, 3000);
            break;
          case DayStage.CardRevealRequest:
            this.commonService.closeIdleModal();
            this.commonService.closeGameActionModal();
            setTimeout(() => {
              const sound = new Howl({
                src: ['../../../assets/tututu.mp3'],
              });
              sound.play();
            }, 2 * 1000);
            if (this.shouldRevealCard) {
              this.commonService.openGameActionModal({
                citizens: this.game.citizens,
                roomCode: this.game.roomCode,
                backdropClass: 'purple-backdrop',
                actionType: ActionType.CardReveal,
                myCitizen: this.citizen,
              });
            }
            break;
          case DayStage.CardRevealResult:
            this.commonService.closeIdleModal();
            this.commonService.closeGameActionModal();
            break;
          case DayStage.CitizenKill:
            this.commonService.closeIdleModal();
            this.commonService.openGameActionModal({
              citizens: this.game.citizens,
              roomCode: this.game.roomCode,
              backdropClass: 'purple-backdrop',
              actionType: ActionType.CivilKill,
              myCitizen: this.citizen,
            });
            break;
          case DayStage.Finish:
            this.commonService.closeIdleModal();
            break;
        }
      });
  }

  onStartNight() {
    this.startNightRequestSend = true;
    this.gameService
      .startNight(this.roomCode)
      .subscribe((res) => console.log(res));
  }

  onStartJudge() {
    this.startJudgeRequestSend = true;
    this.gameService
      .startJudge(this.roomCode)
      .subscribe((res) => console.log(res));
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

  getDayNumber(day: Day) {
    const index = this.days.findIndex((d) => d == day);
    return index + 1;
  }

  ngOnDestroy() {
    this.timerSub?.unsubscribe();
  }
}
