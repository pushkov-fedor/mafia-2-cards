import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RoomService } from 'src/app/room/room.service';
import { CardType } from 'src/app/shared/models/card-type.model';
import { Card } from 'src/app/shared/models/card.model';
import { Citizen } from 'src/app/shared/models/citizen.model';
import { Day } from 'src/app/shared/models/day.model';
import { Game } from 'src/app/shared/models/game.model';
import { GameService } from '../game.service';
import * as _ from 'lodash';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  constructor(
    private roomService: RoomService,
    private gameService: GameService,
  ) {}

  roomCode: string;
  playerName: string;

  game: Game;

  timerSub: Subscription;

  get citizen(): Citizen {
    return this.game?.citizens.find(
      (citizen) => citizen.name == this.playerName,
    );
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
    return this.days.reverse();
  }

  ngOnInit() {
    const room = this.roomService.room.getValue();
    const player = this.roomService.player.getValue();
    this.roomCode = room.code;
    this.playerName = player.name;

    this.timerSub = timer(0, 2000)
      .pipe(switchMap(() => this.gameService.getGameStatus(this.roomCode)))
      .subscribe((game: Game) => {
        this.game = game;
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

  ngOnDestroy() {
    this.timerSub?.unsubscribe();
  }
}
