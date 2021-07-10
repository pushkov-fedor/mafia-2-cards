import { Player } from './../../shared/models/player.model';
import { Room, RoomStatus } from './../../shared/models/room.model';
import { RoomService } from './../room.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, throwError } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'room-wait',
  templateUrl: './room-wait.component.html',
  styleUrls: ['./room-wait.component.scss'],
})
export class RoomWaitComponent implements OnInit, OnDestroy {
  constructor(
    private roomService: RoomService,
    private commonService: CommonService,
    private router: Router,
  ) {}

  room: Room;
  player: Player;

  intervalSub: Subscription;

  ngOnInit(): void {
    this.roomService.room
      .pipe(filter((room) => room != null || room != undefined))
      .subscribe((room) => {
        this.room = room;
        if (room.roomStatus == RoomStatus.ACTIVE) {
          this.router.navigate(['game']);
        }
      });
    this.player = this.roomService.player.getValue();
    if (!this.room) {
      this.router.navigate(['room']);
      return;
    }
    this.intervalSub = interval(2000)
      .pipe(
        switchMap(() =>
          this.roomService.waitRoom(this.room.code, this.player.name),
        ),
        catchError((err) => {
          this.commonService.openAlertModal({ message: err.error.message });
          this.router.navigate(['room']);
          return throwError(err);
        }),
      )
      .subscribe((room) => {
        this.roomService.room.next(room);
      });
  }

  onGameStart() {
    this.roomService
      .startRoom(this.room.code)
      .subscribe((res) => console.log(res));
  }

  ngOnDestroy() {
    this.intervalSub?.unsubscribe();
  }
}
