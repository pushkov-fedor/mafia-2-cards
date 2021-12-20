import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Game } from './model/game.model';
import { Player } from './model/player.model';
import { Vote } from './model/vote.model';

@Injectable()
export class GameService {
  private games: Game[] = [];

  // Основные методы

  createGame(
    hostName: string,
    civilsNumber: number,
    mafiaNumber: number,
    hasPolice: boolean,
  ) {
    const game = new Game(civilsNumber, mafiaNumber, hasPolice);
    const creator = new Player(hostName, true);
    game.addPlayer(creator);
    // mock players
    game.addPlayer(new Player('1'));
    game.addPlayer(new Player('2'));
    game.addPlayer(new Player('3'));
    game.addPlayer(new Player('4'));
    game.addPlayer(new Player('5'));
    // mock players end
    this.games.push(game);
    return game;
  }

  joinGame(gameId: string, playerName: string) {
    const game = this.getGameById(gameId);
    if (game.hasPlayer(playerName)) {
      return game;
    }
    const player = new Player(playerName);
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

  startNight(gameId: string, playerName: string) {
    const game = this.getGameById(gameId);
    game.startNight(new Vote(playerName));
    // mock players voting
    game.startNight(new Vote('1'));
    game.startNight(new Vote('2'));
    game.startNight(new Vote('3'));
    game.startNight(new Vote('4'));
    game.startNight(new Vote('5'));
    // mock end
  }

  mafiaKill(gameId: string, playerName: string, playerVoteValue: string) {
    const game = this.getGameById(gameId);
    game.mafiaKill(new Vote(playerName, playerVoteValue));
  }

  endNight(gameId: string) {
    const game = this.getGameById(gameId);
    game.endNight();
  }

  startTrial(gameId: string, playerName: string) {
    const game = this.getGameById(gameId);
    game.startTrial(new Vote(playerName));
  }

  civilsKill(gameId: string, playerName: string, playerVoteValue: string) {
    const game = this.getGameById(gameId);
    game.civilsKill(new Vote(playerName, playerVoteValue));
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
}
