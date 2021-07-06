import { RoomValidate, RoomValidationConfig } from './room.validate';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Player } from './model/player.model';
import { RoomStatus } from './model/room-status.model';
import { Room } from './model/room.model';
import { CreateRoomResponse } from './response/create-room.response';
import { JoinRoomResponse } from './response/join-room.response';

@Injectable()
export class RoomService {
  constructor(private roomValidate: RoomValidate) {}
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
    return new CreateRoomResponse(room, creator);
  }

  join(code: string, playerName: string) {
    const room = this.getByCode(code);
    this.roomValidate.validate(room, {
      isExist: true,
      isActive: true,
      isCancelled: true,
      hasSlotsForPlayer: true,
    });
    const player = room.players.find((player) => player.name == playerName);
    if (player) {
      return new JoinRoomResponse(room, player);
    } else {
      const newPlayer = new Player(playerName);
      room.addPlayer(newPlayer);
      return new JoinRoomResponse(room, newPlayer);
    }
  }

  getAll() {
    return this.rooms;
  }

  getByCode(code: string, validationConfg?: RoomValidationConfig) {
    const room = this.rooms.find(
      (room) => room.code.toLowerCase() == code.toLowerCase(),
    );
    this.roomValidate.validate(room, validationConfg);
    return room;
  }
}
