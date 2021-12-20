import { CardType } from './card-type.enum';
import { Card } from './card.model';
import { HealthStatus } from './health-status.enum';
import cryptoRandomString = require('crypto-random-string');

export class Player {
  id: string;
  card: Card;
  status: HealthStatus;

  constructor(public name: string, public isHost = false) {
    this.id = cryptoRandomString({ length: 8 });
    this.status = HealthStatus.Alive;
  }

  // Публичные методы

  hasCardType(cardType: CardType) {
    return this.card.type === cardType;
  }

  isAliveCardType(cardType: CardType) {
    return this.status === HealthStatus.Alive && this.card.type === cardType;
  }
}
