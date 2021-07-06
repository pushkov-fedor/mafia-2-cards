import { HttpException, HttpStatus } from '@nestjs/common';
import { RoomStatus } from './model/room-status.model';
import { Room } from './model/room.model';

export interface RoomValidationConfig {
  isExist?: boolean;
  isCancelled?: boolean;
  isActive?: boolean;
  hasSlotsForPlayer?: boolean;
}

export class RoomValidate {
  validate(room: Room, config: RoomValidationConfig) {
    if (!config) return true;

    if (config.isExist && !room) {
      throw new HttpException(
        'Комната с таким кодом не найдена',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (config.isCancelled && room.roomStatus == RoomStatus.CANCELED) {
      throw new HttpException(
        'Комната удалена, т.к. не набралось необходимого количества игроков',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (config.isExist && room.roomStatus == RoomStatus.ACTIVE) {
      throw new HttpException('Игра уже началась', HttpStatus.BAD_REQUEST);
    }
    if (config.hasSlotsForPlayer && !room.hasSlotForPlayer()) {
      throw new HttpException('Нет слотов для игроков', HttpStatus.BAD_REQUEST);
    }
    return true;
  }
}
