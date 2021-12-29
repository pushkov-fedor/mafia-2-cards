import { GameModule } from './game/game.module';
import { RoomModule } from './room/room.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Game2Module } from './game2/game.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    RoomModule,
    GameModule,
    Game2Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
