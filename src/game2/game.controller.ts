import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game2Mock } from './game2.mock';

@Controller('game2')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get('mock')
  mock() {
    // const game = Game2Mock.createGame(
    //   this.gameService,
    //   CardsPerPlayer.Two,
    //   1,
    //   1,
    //   6,
    // );
    // Game2Mock.addPlayers(this.gameService, 5, game.id);
    // Game2Mock.startGame(this.gameService, game.id);
    // Game2Mock.voteForNight(this.gameService, game.id, 5);
    // Game2Mock.mafiaKill(this.gameService, game.id);
    // const checkResult = Game2Mock.policeCheck(this.gameService, game.id);
    // Game2Mock.cardReveal(this.gameService, game.id);
    // Game2Mock.civilsKill(this.gameService, game.id);
    // Game2Mock.cardReveal(this.gameService, game.id);
    // Game2Mock.voteForNight(this.gameService, game.id, 6);
    // return game;
  }

  @Get('get/:id')
  get(@Param('id') id: string) {
    const game = this.gameService.getGameById(id);
    console.log(game);
    return game;
  }

  @Post('create')
  create(
    @Body()
    {
      creatorName,
      civilsNumber,
      mafiaNumber,
      hasPolice,
    }: {
      creatorName: string;
      civilsNumber: number;
      mafiaNumber: number;
      hasPolice: boolean;
    },
  ) {
    const game = this.gameService.createGame(
      creatorName,
      civilsNumber,
      mafiaNumber,
      hasPolice,
    );
    console.log(mafiaNumber);
    const playerId = game.getPlayerIdByName(creatorName);
    return {
      game,
      playerId,
    };
  }

  @Post('join')
  join(@Body() { gameId, playerName }: { gameId: string; playerName: string }) {
    const game = this.gameService.joinGame(gameId, playerName);
    const playerId = game.getPlayerIdByName(playerName);
    return {
      game,
      playerId,
    };
  }

  @Post('start')
  start(@Body() { gameId }: { gameId: string }) {
    return this.gameService.startGame(gameId);
  }

  @Post('startNight')
  startNight(
    @Body() { gameId, playerName }: { gameId: string; playerName: string },
  ) {
    return this.gameService.startNight(gameId, playerName);
  }

  @Post('mafiaKill')
  mafiaKill(
    @Body()
    {
      gameId,
      playerName,
      playerVoteValue,
    }: {
      gameId: string;
      playerName: string;
      playerVoteValue: string;
    },
  ) {
    return this.gameService.mafiaKill(gameId, playerName, playerVoteValue);
  }

  @Post('policeCheck')
  policeCheck(
    @Body()
    {
      gameId,
      playerNameToCheck,
      playerCardToCheck,
    }: {
      gameId: string;
      playerNameToCheck: string;
      playerCardToCheck: 0 | 1;
    },
  ) {
    return this.gameService.policeCheck(
      gameId,
      playerNameToCheck,
      playerCardToCheck,
    );
  }

  @Post('civilsKill')
  civilsKill(
    @Body()
    {
      gameId,
      playerName,
      playerVoteValue,
    }: {
      gameId: string;
      playerName: string;
      playerVoteValue: string;
    },
  ) {
    return this.gameService.civilsKill(gameId, playerName, playerVoteValue);
  }
}
