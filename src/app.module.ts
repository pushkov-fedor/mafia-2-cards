import { RoomModule } from './room/room.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RoomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
