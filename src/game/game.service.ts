import { Injectable } from '@nestjs/common';
import { RoomService } from '../room/room.service';

@Injectable()
export class GameService {
  constructor(private roomService: RoomService) {}

  startGame(roomCode: string) {
    const room = this.roomService.getByCode(roomCode);
    console.log(room);
  }
}
