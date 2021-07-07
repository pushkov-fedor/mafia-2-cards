import { CardType } from './card-type.model';

export class Card {
  constructor(public cardType: CardType, public isRevealed = false) {}
}
