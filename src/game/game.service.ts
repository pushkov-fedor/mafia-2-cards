import { Injectable } from '@nestjs/common';
import { RoomService } from '../room/room.service';
import { CardType } from './model/card-type.model';
import * as _ from 'lodash';
import { Card } from './model/card.model';

@Injectable()
export class GameService {
  constructor(private roomService: RoomService) {}
}
