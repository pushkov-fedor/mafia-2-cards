import { Injectable } from '@nestjs/common';
import * as cryptoRandomString from 'crypto-random-string';
import { nanoid } from 'nanoid';

export class Player {
  private id: string;
  constructor(private name: string) {
    this.id = nanoid();
  }
}

export class Room {
  private id: string;
  private code: string;
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

@Injectable()
export class RoomService {
  private rooms: Room[] = [];

  createRoom(
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
}
