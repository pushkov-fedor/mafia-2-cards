import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss'],
})
export class RoomCreateComponent {
  formGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    numberOfPlayers: new FormControl(null, [
      Validators.required,
      Validators.min(4),
    ]),
    numberOfMafia: new FormControl(null, [
      Validators.required,
      Validators.min(1),
    ]),
    numberOfPolices: new FormControl(null, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  onRoomCreateClick() {}
}
