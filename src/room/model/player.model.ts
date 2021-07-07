import { addSeconds } from 'date-fns';
import { nanoid } from 'nanoid';
import { Card } from '../../game/model/card.model';

export class Player {
  id: string;
  checkActiveTimeStamp: Date;
  cards: Card[] = [];
  constructor(public name: string, public isRoomCreator: boolean = false) {
    this.id = nanoid();
    this.checkActiveTimeStamp = addSeconds(new Date(), 7);
  }
}
