import { Injectable } from '@nestjs/common';
import { Player } from './model/player.model';
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
    const creator = new Player(creatorName);
    const room = new Room(numberOfPlayers, numberOfMafia, numberOfPolices, [
      creator,
    ]);
    this.rooms.push(room);
    return room;
  }

  getAll() {
    return this.rooms;
  }
}
