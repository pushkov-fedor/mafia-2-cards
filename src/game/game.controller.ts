import { GameService } from './game.service';
import { Controller, Param, Post } from '@nestjs/common';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('start/:roomCode')
  startGame(@Param('roomCode') roomCode: string) {
    return this.gameService.startGame(roomCode);
  }
}
