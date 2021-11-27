import { CardType } from './card-type.enum';
import { HealthStatus } from './health-status.enum';

export class Card {
  status: HealthStatus;

  constructor(public type: CardType) {
    this.status = HealthStatus.Alive;
  }
}
