import { Card } from './card.model';
import { HealthStatus } from './health-status.enum';

export class Player {
  private cards: Card[];
  private status: HealthStatus;

  constructor(private name: string) {
    this.cards = [];
    this.status = HealthStatus.Alive;
  }
}
