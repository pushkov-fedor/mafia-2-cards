import { RoomValidate } from './room.validate';
import { RoomController } from './room.controller';
import { Module } from '@nestjs/common';
import { RoomService } from './room.service';

@Module({
  imports: [],
  controllers: [RoomController],
  providers: [RoomService, RoomValidate],
})
export class RoomModule {}
