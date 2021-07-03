import { RoomController } from './room.controller';
import { Module } from '@nestjs/common';
import { RoomService } from './room.service';

@Module({
  imports: [],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
