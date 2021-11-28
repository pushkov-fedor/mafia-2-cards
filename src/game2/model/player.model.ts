import { CardType } from './card-type.enum';
import { Card } from './card.model';
import { HealthStatus } from './health-status.enum';

export class Player {
  cards: Card[];
  status: HealthStatus;

  constructor(public name: string) {
    this.cards = [];
    this.status = HealthStatus.Alive;
  }

  // Публичные методы

  revealCard(cardIndex: 0 | 1) {
    const card = this.cards[cardIndex];
    if (card) {
      card.status = HealthStatus.Dead;
      if (!this.hasAliveCard()) {
        this.status = HealthStatus.Dead;
      }
    }
  }

  hasAliveCardType(cardType: CardType) {
    return this.cards.some(
      (card) => card.type === cardType && card.status === HealthStatus.Alive,
    );
  }

  haveCardTypeAt(cardType: CardType, index: number) {
    return this.cards[index].type === cardType;
  }

  hasAliveCard() {
    return this.cards.some((card) => card.status === HealthStatus.Alive);
  }
}
