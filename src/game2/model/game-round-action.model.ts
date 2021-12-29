import { Player } from './player.model';
import cryptoRandomString = require('crypto-random-string');

export class GameRoundAction {
  id: string;
  killedPlayer: Player;
  message: string;

  constructor() {
    this.id = cryptoRandomString({
      length: 6,
      type: 'base64',
    });
  }
}
