import { nanoid } from 'nanoid';

export class Player {
  private id: string;
  constructor(private name: string) {
    this.id = nanoid();
  }
}
