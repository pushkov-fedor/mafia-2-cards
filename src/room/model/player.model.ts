import { addSeconds } from 'date-fns';
import { nanoid } from 'nanoid';

export class Player {
  id: string;
  checkActiveTimeStamp: Date;
  constructor(public name: string, public isRoomCreator: boolean = false) {
    this.id = nanoid();
    this.checkActiveTimeStamp = addSeconds(new Date(), 7);
  }
}
