import { Injectable } from '@nestjs/common';
import { Player } from './model/player.model';
import { RoomStatus } from './model/room-status.model';
import { Room } from './model/room.model';

@Injectable()
export class RoomService {
  private rooms: Room[] = [];

  create(
    numberOfPlayers: number,
    numberOfMafia: number,
    numberOfPolices: number,
    creatorName: string,
  ) {
    const creator = new Player(creatorName, true);
    const room = new Room(numberOfPlayers, numberOfMafia, numberOfPolices);
    room.addPlayer(creator);
    this.rooms.push(room);
    return room;
  }

  join(code: string, playerName: string) {
    const room = this.getByCode(code);
    if (!room) {
      return;
    }
    if (room.roomStatus == RoomStatus.PENDING && room.hasSlotForPlayer()) {
      const player = new Player(playerName);
      room.addPlayer(player);
      return room;
    }
  }

  getAll() {
    return this.rooms;
  }

  getByCode(code: string) {
    return this.rooms.find(
      (room) => room.code.toLowerCase() == code.toLowerCase(),
    );
  }
}
