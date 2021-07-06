import { Player } from './player.model';

export enum RoomStatus {
  PENDING,
  ACTIVE,
  CANCELED,
}

export interface Room {
  code: string;
  id: string;
  numberOfPlayers: number;
  numberOfMafia: number;
  numberOfPolices: number;
  players: Player[];
  roomStatus: RoomStatus;
}
