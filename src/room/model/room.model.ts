import { Player } from './player.model';
import { RoomStatus } from './room-status.model';
import { nanoid } from 'nanoid';
import * as cryptoRandomString from 'crypto-random-string';

export class Room {
  private id: string;
  private code: string;
  private roomStatus = RoomStatus.PENDING;
  constructor(
    private numberOfPlayers: number,
    private numberOfMafia: number,
    private numberOfPolices: number,
    private players: Player[] = [],
  ) {
    this.code = cryptoRandomString({
      length: 4,
      type: 'distinguishable',
    });
    this.id = nanoid();
  }
}
