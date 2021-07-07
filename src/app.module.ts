import { GameModule } from './game/game.module';
import { RoomModule } from './room/room.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RoomModule, GameModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
