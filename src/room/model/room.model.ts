import { Player } from './player.model';
import { RoomStatus } from './room-status.model';
import { nanoid } from 'nanoid';
import * as cryptoRandomString from 'crypto-random-string';

export class Room {
  public id: string;
  public code: string;
  public roomStatus = RoomStatus.PENDING;
  public players: Player[] = [];
  constructor(
    public numberOfPlayers: number,
    public numberOfMafia: number,
    public numberOfPolices: number,
  ) {
    this.code = cryptoRandomString({
      length: 4,
      type: 'distinguishable',
    });
    this.id = nanoid();

    setTimeout(() => {
      if (this.roomStatus == RoomStatus.PENDING) {
        this.roomStatus = RoomStatus.CANCELED;
      }
    }, 1000 * 60 * 5);
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  hasSlotForPlayer() {
    return this.players.length < this.numberOfPlayers;
  }
}
