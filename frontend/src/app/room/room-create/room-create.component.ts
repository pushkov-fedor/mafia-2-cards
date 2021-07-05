import { CommonService } from './../../common.service';
import { RoomService } from './../room.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss'],
})
export class RoomCreateComponent {
  constructor(
    private roomService: RoomService,
    private commonService: CommonService,
  ) {}

  formGroup = new FormGroup({
    name: new FormControl('Злая сука', Validators.required),
    numberOfPlayers: new FormControl(6, [
      Validators.required,
      Validators.min(4),
    ]),
    numberOfMafia: new FormControl(2, [Validators.required, Validators.min(1)]),
    numberOfPolices: new FormControl(1, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  onRoomCreateClick() {
    const { name, numberOfPlayers, numberOfMafia, numberOfPolices } =
      this.formGroup.value;

    if (
      numberOfMafia > numberOfPlayers ||
      numberOfPolices > numberOfPlayers ||
      numberOfMafia + numberOfPolices > numberOfPlayers
    ) {
      this.commonService.openAlertModal({
        message:
          'Количество мафии и коммиссаров не может быть больше, чем количество игроков',
      });
      return;
    }

    this.roomService
      .createRoom(name, numberOfPlayers, numberOfMafia, numberOfPolices)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.commonService.openAlertModal({ message: err.error.message });
          return throwError(err);
        }),
      )
      .subscribe((res) => console.log(res));
  }
}
