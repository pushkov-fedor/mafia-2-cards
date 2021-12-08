import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game2Mock } from './game2.mock';
import { CardsPerPlayer } from './model/cards-per-player.enum';

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
    return this.gameService.getGameById(id);
  }

  @Post('create')
  create(
    @Body()
    {
      cardsPerPlayer,
      creatorName,
      mafiaNumber,
      policeNumber,
      playersNumber,
    }: {
      cardsPerPlayer: CardsPerPlayer;
      creatorName: string;
      mafiaNumber: number;
      policeNumber: number;
      playersNumber: number;
    },
  ) {
    const game = this.gameService.createGame(
      cardsPerPlayer,
      creatorName,
      mafiaNumber,
      policeNumber,
      playersNumber,
    );
    const player = game.players.find((player) => player.name === creatorName);
    return {
      game,
      playerId: player.id,
    };
  }

  @Post('join')
  join(@Body() { gameId, playerName }: { gameId: string; playerName: string }) {
    return this.gameService.joinGame(gameId, playerName);
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

  @Post('revealCard')
  revealCard(
    @Body()
    {
      gameId,
      playerName,
      cardIndex,
    }: {
      gameId: string;
      playerName: string;
      cardIndex: 0 | 1;
    },
  ) {
    return this.gameService.revealCard(gameId, playerName, cardIndex);
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
