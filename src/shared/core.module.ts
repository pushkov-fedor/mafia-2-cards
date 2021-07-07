import { Module } from '@nestjs/common';
import { RoomService } from '../room/room.service';
import { RoomValidate } from '../room/room.validate';

@Module({
  providers: [RoomService, RoomValidate],
  exports: [RoomService, RoomValidate],
})
export class CoreModule {}
