import { Room, RoomStatus } from './../../shared/models/room.model';
import { RoomService } from './../room.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
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

  intervalSub: Subscription;

  ngOnInit(): void {
    this.roomService.room.subscribe((room) => (this.room = room));
    if (!this.room) {
      this.router.navigate(['room']);
      return;
    }
    this.intervalSub = interval(2000)
      .pipe(
        switchMap(() =>
          this.roomService.get(this.room.code, {
            isExistValidate: 'true',
            isActiveValidate: 'true',
            isCancelValidate: 'true',
          }),
        ),
        catchError((err) => {
          this.commonService.openAlertModal({ message: err.error.message });
          return throwError(err);
        }),
      )
      .subscribe((room) => {
        this.roomService.room.next(room);
      });
  }

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
}
