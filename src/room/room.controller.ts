import { RoomService } from './room.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { JoinRoomDto } from './dto/join-room.dto';

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

  @Post('join')
  joinRoom(@Body() joinRoomDto: JoinRoomDto) {
    const { code, playerName } = joinRoomDto;
    return this.roomService.join(code, playerName);
  }
}
