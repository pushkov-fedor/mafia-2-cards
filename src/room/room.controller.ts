import { RoomService } from './room.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

export class CreateRoomDto {
  creatorName: string;
  players: number;
  mafia: number;
  polices: number;
}

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}
  @Get()
  getRoom() {
    return this.roomService.getAll();
  }

  @Post('create')
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    const { players, mafia, polices, creatorName } = createRoomDto;
    return this.roomService.create(players, mafia, polices, creatorName);
  }
}
