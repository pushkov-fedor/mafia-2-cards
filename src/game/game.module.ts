import { GameController } from './game.controller';
import { CoreModule } from './../shared/core.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule],
  controllers: [GameController],
  providers: [],
})
export class GameModule {}
