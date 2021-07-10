import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RoomService } from 'src/app/room/room.service';
import { GameService } from '../game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(
    private roomService: RoomService,
    private gameService: GameService,
  ) {}

  roomCode: string;
  playerName: string;

  timerSub: Subscription;

  ngOnInit() {
    const room = this.roomService.room.getValue();
    const player = this.roomService.player.getValue();
    this.roomCode = room.code;
    this.playerName = player.name;

    this.timerSub = timer(0, 2000)
      .pipe(switchMap(() => this.gameService.getGameStatus(this.roomCode)))
      .subscribe((game) => {
        console.log(game);
      });
  }
}
