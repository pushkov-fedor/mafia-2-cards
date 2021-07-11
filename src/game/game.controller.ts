import { GameService } from './game.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KillCitizenDto } from './dto/kill-player.dto';
import { CheckCitizenDto } from './dto/check-citizen.dto';
import { CardRevealDto } from './dto/card-reveal.dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('start/:roomCode')
  startGame(@Param('roomCode') roomCode: string) {
    return this.gameService.startGame(roomCode);
  }

  @Post('killCitizen')
  citizenKill(@Body() killCitizenDto: KillCitizenDto) {
    return this.gameService.killCitizen(
      killCitizenDto.roomCode,
      killCitizenDto.citizenName,
    );
  }

  @Post('policeCheck')
  checkCitizen(@Body() checkCitizenDto: CheckCitizenDto) {
    const { roomCode, citizenName, cardIndex } = checkCitizenDto;
    return this.gameService.policeCheck(roomCode, citizenName, cardIndex);
  }

  @Post('cardReveal')
  cardReveal(@Body() cardRevealDto: CardRevealDto) {
    const { roomCode, citizenName, cardIndex } = cardRevealDto;
    return this.gameService.cardReveal(roomCode, citizenName, cardIndex);
  }

  @Get('status/:roomCode')
  gameStatus(@Param('roomCode') roomCode: string) {
    return this.gameService.getGameByRoomCode(roomCode);
  }
}
