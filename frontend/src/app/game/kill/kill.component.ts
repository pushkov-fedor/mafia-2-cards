import { Component, Inject } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Citizen } from 'src/app/shared/models/citizen.model';
import {
  KILL_MODAL_CITIZENS,
  KILL_MODAL_CLOSE,
  KILL_MODAL_ROOM_CODE,
} from 'src/app/shared/tokens/kill.tokens';
import { GameService } from '../game.service';

@Component({
  selector: 'game-kill',
  templateUrl: './kill.component.html',
  styleUrls: ['./kill.component.scss'],
})
export class KillComponent {
  constructor(
    @Inject(KILL_MODAL_CITIZENS) public citizens: Citizen[],
    @Inject(KILL_MODAL_CLOSE) public closeModal: () => void,
    @Inject(KILL_MODAL_ROOM_CODE) public roomCode: string,
    private gameService: GameService,
    private commonService: CommonService,
  ) {}

  selected: Citizen;

  onSelect(citizen: Citizen) {
    this.selected = citizen;
  }

  onKill() {
    this.gameService
      .kill(this.roomCode, this.selected.name)
      .subscribe(() => void 0);
    this.commonService.openIdleModal();
    this.closeModal();
  }
}
