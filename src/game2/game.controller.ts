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
    @Body() { gameId, playerId }: { gameId: string; playerId: string },
  ) {
    return this.gameService.startNight(gameId, playerId);
  }

  @Post('mafiaKill')
  mafiaKill(
    @Body()
    {
      gameId,
      playerId,
      playerVoteValue,
    }: {
      gameId: string;
      playerId: string;
      playerVoteValue: string;
    },
  ) {
    return this.gameService.mafiaKill(gameId, playerId, playerVoteValue);
  }

  @Post('endNight')
  endNight(
    @Body()
    { gameId }: { gameId: string },
  ) {
    return this.gameService.endNight(gameId);
  }

  @Post('startTrial')
  startTrial(
    @Body()
    { gameId, playerId }: { gameId: string; playerId: string },
  ) {
    this.gameService.startTrial(gameId, playerId);
  }

  @Post('civilsKill')
  civilsKill(
    @Body()
    {
      gameId,
      playerId,
      playerVoteValue,
    }: {
      gameId: string;
      playerId: string;
      playerVoteValue: string;
    },
  ) {
    return this.gameService.civilsKill(gameId, playerId, playerVoteValue);
  }
}
