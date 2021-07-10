import { GameService } from './game.service';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { KillPlayerDto } from './dto/kill-player.dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}
}
