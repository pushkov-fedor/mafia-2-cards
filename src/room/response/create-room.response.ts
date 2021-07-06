import { Player } from '../model/player.model';
import { Room } from '../model/room.model';

export class CreateRoomResponse {
  constructor(private room: Room, private player: Player) {}
}
