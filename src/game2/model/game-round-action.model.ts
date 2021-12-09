import { Player } from './player.model';
import cryptoRandomString = require('crypto-random-string');
import { Card } from './card.model';

export class GameRoundAction {
  id: string;
  killedByMafia: Player;
  killedByMafiaCard: Card;
  judgedByCivils: Player;
  judgedByCivilsCard: Card;

  constructor() {
    this.id = cryptoRandomString({
      length: 6,
      type: 'base64',
    });
  }
}
