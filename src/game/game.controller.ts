import { GameService } from './game.service';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { KillCitizenDto } from './dto/kill-player.dto';
import { StartGameDto } from './dto/start-game.dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('start')
  startGame(@Body() startGameDto: StartGameDto) {
    return this.gameService.startGame(startGameDto.roomCode);
  }

  @Post('killCitizen')
  citizenKill(@Body() killCitizenDto: KillCitizenDto) {
    return this.gameService.killCitizen(
      killCitizenDto.roomCode,
      killCitizenDto.citizenName,
    );
  }
}
