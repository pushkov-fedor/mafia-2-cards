import { nanoid } from 'nanoid';

export class Player {
  private id: string;
  constructor(private name: string, private isRoomCreator: boolean = false) {
    this.id = nanoid();
  }
}
