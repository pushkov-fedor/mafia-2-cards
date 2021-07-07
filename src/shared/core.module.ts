import { GameService } from './../game/game.service';
import { Module } from '@nestjs/common';
import { RoomService } from '../room/room.service';
import { RoomValidate } from '../room/room.validate';

@Module({
  providers: [RoomService, RoomValidate, GameService],
  exports: [RoomService, RoomValidate, GameService],
})
export class CoreModule {}
