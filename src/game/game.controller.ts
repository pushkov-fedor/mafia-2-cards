import { GameService } from './game.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KillCitizenDto } from './dto/kill-player.dto';
import { CheckCitizenDto } from './dto/check-citizen.dto';
import { CardRevealDto } from './dto/card-reveal.dto';
import { StartNightDto } from './dto/start-night.dto';
import { StartJudgeDto } from './dto/start-judge.dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('start/:roomCode')
  startGame(@Param('roomCode') roomCode: string) {
    return this.gameService.startGame(roomCode);
  }

  @Post('killByMafia')
  killByMafia(@Body() killCitizenDto: KillCitizenDto) {
    return this.gameService.killByMafia(
      killCitizenDto.roomCode,
      killCitizenDto.citizenName,
    );
  }

  @Post('policeCheck')
  checkCitizen(@Body() checkCitizenDto: CheckCitizenDto) {
    const { roomCode, citizenName, cardIndex } = checkCitizenDto;
    return this.gameService.policeCheck(roomCode, citizenName, cardIndex);
  }

  @Post('killByCivil')
  killByCivil(@Body() KillCitizenDto: KillCitizenDto) {
    return this.gameService.killByCivil(
      KillCitizenDto.roomCode,
      KillCitizenDto.citizenName,
    );
  }

  @Post('cardReveal')
  cardReveal(@Body() cardRevealDto: CardRevealDto) {
    const { roomCode, citizenName, cardIndex } = cardRevealDto;
    return this.gameService.cardReveal(roomCode, citizenName, cardIndex);
  }

  @Post('startNight')
  startNight(@Body() startNightDto: StartNightDto) {
    return this.gameService.startNight(startNightDto.roomCode);
  }

  @Post('startJudge')
  startJudge(@Body() startJudgeDto: StartJudgeDto) {
    return this.gameService.startJudge(startJudgeDto.roomCode);
  }

  @Get('status/:roomCode')
  gameStatus(@Param('roomCode') roomCode: string) {
    return this.gameService.getGameByRoomCode(roomCode);
  }
}
