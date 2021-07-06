import { RoomValidate, RoomValidationConfig } from './room.validate';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Player } from './model/player.model';
import { RoomStatus } from './model/room-status.model';
import { Room } from './model/room.model';
import { CreateRoomResponse } from './response/create-room.response';

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
    const player = new Player(playerName);
    room.addPlayer(player);
    return room;
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
