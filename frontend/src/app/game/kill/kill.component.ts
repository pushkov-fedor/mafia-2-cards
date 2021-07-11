import { Component, Inject } from '@angular/core';
import { Citizen } from 'src/app/shared/models/citizen.model';
import {
  KILL_MODAL_CITIZENS,
  KILL_MODAL_CLOSE,
} from 'src/app/shared/tokens/kill.tokens';

@Component({
  selector: 'game-kill',
  templateUrl: './kill.component.html',
  styleUrls: ['./kill.component.scss'],
})
export class KillComponent {
  constructor(
    @Inject(KILL_MODAL_CITIZENS) public citizens: Citizen[],
    @Inject(KILL_MODAL_CLOSE) public closeModal: () => void,
  ) {}
}
