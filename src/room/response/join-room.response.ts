import { Player } from './../model/player.model';
import { Room } from '../model/room.model';

export class JoinRoomResponse {
  constructor(private room: Room, private player: Player) {}
}
