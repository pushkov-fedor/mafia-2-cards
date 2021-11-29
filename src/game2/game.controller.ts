import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { Game2Mock } from './game2.mock';
import { CardsPerPlayer } from './model/cards-per-player.enum';

@Controller('game2')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get('create')
  create() {
    const game = Game2Mock.createGame(
      this.gameService,
      CardsPerPlayer.Two,
      1,
      1,
      6,
    );
    Game2Mock.addPlayers(this.gameService, 5, game.id);
    Game2Mock.startGame(this.gameService, game.id);
    Game2Mock.voteForNight(this.gameService, game.id, 5);
    Game2Mock.mafiaKill(this.gameService, game.id);
    const checkResult = Game2Mock.policeCheck(this.gameService, game.id);
    Game2Mock.cardReveal(this.gameService, game.id);
    Game2Mock.civilsKill(this.gameService, game.id);
    Game2Mock.cardReveal(this.gameService, game.id);
    Game2Mock.voteForNight(this.gameService, game.id, 6);

    return game;
  }
}
