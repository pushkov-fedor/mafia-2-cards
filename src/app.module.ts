import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, RoomController],
  providers: [AppService, RoomService],
})
export class AppModule {}
