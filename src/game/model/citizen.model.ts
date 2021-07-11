import { Card } from './card.model';

export class Citizen {
  shouldRevealCard = false;

  get canPlay() {
    return this.cards.some((card) => !card.isRevealed);
  }

  constructor(public name: string, public cards: Card[] = []) {}
}
