import { nanoid } from 'nanoid';

export class Player {
  private id: string;
  constructor(public name: string, public isRoomCreator: boolean = false) {
    this.id = nanoid();
  }
}
