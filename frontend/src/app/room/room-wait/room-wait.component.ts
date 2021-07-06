import { Room } from './../../shared/models/room.model';
import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'room-wait',
  templateUrl: './room-wait.component.html',
  styleUrls: ['./room-wait.component.scss'],
})
export class RoomWaitComponent implements OnInit {
  constructor(private roomService: RoomService) {}

  room: Room;

  ngOnInit(): void {
    this.room = this.roomService.room.getValue();
    console.log(this.room);
  }
}
