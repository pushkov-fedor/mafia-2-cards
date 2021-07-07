import { CoreModule } from './../shared/core.module';
import { RoomController } from './room.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule],
  controllers: [RoomController],
  providers: [],
})
export class RoomModule {}
