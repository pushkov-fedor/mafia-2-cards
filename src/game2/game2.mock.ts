import { GameService } from './game.service';
import { CardType } from './model/card-type.enum';
import * as _ from 'lodash';
import { Player } from './model/player.model';
import { HealthStatus } from './model/health-status.enum';

export class Game2Mock {
  // static createGame(
  //   gameService: GameService,
  //   cardsPerPlayer: CardsPerPlayer,
  //   mafiaNumber: number,
  //   policeNumber: number,
  //   playersNumber: number,
  // ) {
  //   const game = gameService.createGame(
  //     cardsPerPlayer,
  //     'Creator',
  //     mafiaNumber,
  //     policeNumber,
  //     playersNumber,
  //   );
  //   return game;
  // }
  // static addPlayers(
  //   gameService: GameService,
  //   playersNumberToAdd: number,
  //   gameId: string,
  // ) {
  //   for (let i = 0; i < playersNumberToAdd; i++) {
  //     gameService.joinGame(gameId, `Player${i + 1}`);
  //   }
  // }
  // static startGame(gameService: GameService, gameId: string) {
  //   gameService.startGame(gameId);
  // }
  // static voteForNight(
  //   gameService: GameService,
  //   gameId: string,
  //   playersNumberToVote: number,
  // ) {
  //   const game = gameService.getGameById(gameId);
  //   const players = game.players;
  //   for (let i = 0; i < playersNumberToVote; i++) {
  //     const player = players[i];
  //     gameService.startNight(gameId, player.name);
  //   }
  // }
  // static mafiaKill(gameService: GameService, gameId: string) {
  //   const game = gameService.getGameById(gameId);
  //   const mafia = game.players.filter((player) =>
  //     player.hasAliveCardType(CardType.Mafia),
  //   );
  //   const playerToKill = game.players.find((player) =>
  //     player.card.some((card) => card.type !== CardType.Mafia),
  //   );
  //   for (const mafiaMember of mafia) {
  //     gameService.mafiaKill(gameId, mafiaMember.name, playerToKill.name);
  //   }
  // }
  // static policeCheck(gameService: GameService, gameId: string) {
  //   const game = gameService.getGameById(gameId);
  //   const playersShuffled = _.shuffle(game.players);
  //   const player = playersShuffled[0] as Player;
  //   return gameService.policeCheck(gameId, player.name, 0);
  // }
  // static civilsKill(gameService: GameService, gameId: string) {
  //   const game = gameService.getGameById(gameId);
  //   game.players.forEach((player) => {
  //     const playerToJudge = _.shuffle(game.players)[0] as Player;
  //     gameService.civilsKill(gameId, player.name, playerToJudge.name);
  //   });
  // }
  // static cardReveal(gameService: GameService, gameId: string) {
  //   const game = gameService.getGameById(gameId);
  //   const injuredPlayer = game.players.find(
  //     (player) => player.status === HealthStatus.Injured,
  //   );
  //   if (injuredPlayer) {
  //     gameService.revealCard(gameId, injuredPlayer.name, 0);
  //   }
  // }
}
