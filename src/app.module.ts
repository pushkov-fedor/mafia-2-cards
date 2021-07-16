import { GameModule } from './game/game.module';
import { RoomModule } from './room/room.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    RoomModule,
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
