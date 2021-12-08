import { CardType } from './card-type.enum';
import { HealthStatus } from './health-status.enum';
import cryptoRandomString = require('crypto-random-string');

export class Card {
  status: HealthStatus;
  id: string;

  constructor(public type: CardType) {
    this.status = HealthStatus.Alive;
    this.id = cryptoRandomString({
      length: 6,
      type: 'base64',
    });
  }
}
