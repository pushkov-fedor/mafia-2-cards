import { CommonService } from './../../common.service';
import { RoomService } from './../room.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'room-join',
  templateUrl: './room-join.component.html',
  styleUrls: ['./room-join.component.scss'],
})
export class RoomJoinComponent {
  constructor(
    private roomService: RoomService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  roomJoinFormGroup = new FormGroup({
    code: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
  });

  onRoomJoinClick() {
    const { code, name } = this.roomJoinFormGroup.value;
    this.roomService
      .joinRoom(code, name)
      .pipe(
        catchError((err) => {
          this.commonService.openAlertModal({ message: err.error.message });
          return throwError(err);
        }),
      )
      .subscribe(({ room, player }) => {
        this.roomService.room.next(room);
        this.roomService.player.next(player);
        this.router.navigate(['../wait'], {
          relativeTo: this.route,
        });
      });
  }
}
