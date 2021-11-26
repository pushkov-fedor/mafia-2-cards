import { Card } from './card.model';
import { HealthStatus } from './health-status.enum';

export class Player {
  private name: string;
  private cards: Card[];
  private status: HealthStatus;
}
