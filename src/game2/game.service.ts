import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CardsPerPlayer } from './model/cards-per-player.enum';
import { Game } from './model/game.model';
import { Player } from './model/player.model';

@Injectable()
export class GameService {
  private games: Game[];

  //   Основные методы

  createGame(
    cardsPerPlayer: CardsPerPlayer,
    creatorName,
    mafiaNumber,
    policeNumber,
    playersNumber,
  ) {
    const game = new Game(
      cardsPerPlayer,
      mafiaNumber,
      policeNumber,
      playersNumber,
    );
    const creator = new Player(creatorName);
    game.addPlayer(creator);
    this.games.push(game);
    return game;
  }

  joinGame(gameId: string, playerName: string) {
    const game = this.getGameById(gameId);
    const player = new Player(playerName);
    game.addPlayer(player);
    return game;
  }

  getGame(gameId: string) {
    const game = this.getGameById(gameId);
    return game;
  }

  startGame(gameId) {
    const game = this.getGameById(gameId);
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
