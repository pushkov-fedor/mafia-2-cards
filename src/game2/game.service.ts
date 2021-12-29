import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { differenceInMinutes } from 'date-fns';
import { GameStatus } from './model/game-status.enum';
import { Game } from './model/game.model';
import { Player } from './model/player.model';
import { Vote } from './model/vote.model';

@Injectable()
export class GameService {
  private games: Game[] = [];

  constructor() {
    setInterval(() => this.clearGames(), 1000 * 60 * 60);
  }

  // Основные методы
  createGame(
    hostName: string,
    playerPhotoUrl: string,
    civilsNumber: number,
    mafiaNumber: number,
    hasPolice: boolean,
  ) {
    const game = new Game(civilsNumber, mafiaNumber, hasPolice);
    const creator = new Player(hostName, true);
    creator.addPhotoUrl(playerPhotoUrl);
    game.addPlayer(creator);
    this.games.push(game);
    return game;
  }

  joinGame(gameId: string, playerName: string, playerPhotoUrl: string) {
    const game = this.getGameById(gameId);
    if (game.hasPlayer(playerName)) {
      return game;
    }
    const player = new Player(playerName);
    player.addPhotoUrl(playerPhotoUrl);
    game.addPlayer(player);
    return game;
  }

  getGame(gameId: string) {
    const game = this.getGameById(gameId);
    return game;
  }

  startGame(gameId: string) {
    const game = this.getGameById(gameId);
    game.start();
  }

  startNight(gameId: string, playerId: string) {
    const game = this.getGameById(gameId);
    game.startNight(new Vote(playerId));
  }

  mafiaKill(gameId: string, playerId: string, playerVoteValue: string) {
    const game = this.getGameById(gameId);
    game.mafiaKill(new Vote(playerId, playerVoteValue));
  }

  endNight(gameId: string) {
    const game = this.getGameById(gameId);
    game.endNight();
  }

  startTrial(gameId: string, playerId: string) {
    const game = this.getGameById(gameId);
    game.startTrial(new Vote(playerId));
  }

  civilsKill(gameId: string, playerId: string, playerVoteValue: string) {
    const game = this.getGameById(gameId);
    game.civilsKill(new Vote(playerId, playerVoteValue));
  }

  // Вспомогательные методы

  getGameById(gameId: string) {
    const game = this.games.find((game) => game.id === gameId);
    if (!game) {
      throw new HttpException(
        'Игра с таким кодом не найдена',
        HttpStatus.BAD_REQUEST,
      );
    }
    return game;
  }

  clearGames() {
    const currentTimestamp = new Date();
    console.log('Games in memory before cleaning: ', this.games.length);
    this.games = this.games.filter(
      (game) =>
        (game.gameStatus === GameStatus.Created ||
          game.gameStatus === GameStatus.Finished) &&
        Math.abs(
          differenceInMinutes(game.gameCreatedTimestamp, currentTimestamp),
        ) >= 90,
    );
    console.log('Games in memory after cleaning: ', this.games.length);
  }
}
