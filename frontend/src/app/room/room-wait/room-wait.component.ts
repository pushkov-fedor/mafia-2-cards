import { Room } from './../../shared/models/room.model';
import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'room-wait',
  templateUrl: './room-wait.component.html',
  styleUrls: ['./room-wait.component.scss'],
})
export class RoomWaitComponent implements OnInit {
  constructor(private roomService: RoomService, private router: Router) {}

  room: Room;

  intervalSub: Subscription;

  ngOnInit(): void {
    this.roomService.room.subscribe((room) => (this.room = room));
    if (!this.room) {
      this.router.navigate(['room']);
      return;
    }
    this.intervalSub = interval(2000)
      .pipe(switchMap(() => this.roomService.get(this.room.code)))
      .subscribe((room) => {
        this.roomService.room.next(room);
      });
  }
}
