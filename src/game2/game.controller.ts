import { Controller, Get } from '@nestjs/common';
import { GameService } from '../game/game.service';

@Controller('game2')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get('test')
  test() {
    console.log('hyi');
    return 123;
  }
}
