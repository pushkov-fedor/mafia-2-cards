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

  revealCard(cardIndex: 0 | 1) {
    const card = this.card[cardIndex];
    if (card) {
      card.status = HealthStatus.Dead;
      if (!this.hasAliveCard()) {
        this.status = HealthStatus.Dead;
      } else {
        this.status = HealthStatus.Alive;
      }
    }
    return card;
  }

  hasAliveCardType(cardType: CardType) {
    return (
      this.card.type === cardType && this.card.status === HealthStatus.Alive
    );
  }

  hasAliveCard() {
    return this.card.status === HealthStatus.Alive;
  }

  hasCardType(cardType: CardType) {
    return this.card.type === cardType;
  }
}
