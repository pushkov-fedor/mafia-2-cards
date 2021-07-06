import { WaitRoomDto } from './dto/wait-room.dto';
import { RoomValidationConfig } from './room.validate';
import { RoomService } from './room.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { JoinRoomDto } from './dto/join-room.dto';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}
  @Get()
  getRooms() {
    return this.roomService.getAll();
  }

  @Get(':code')
  getRoom(
    @Param('code') code: string,
    @Query('isExistValidate', new DefaultValuePipe(true), ParseBoolPipe)
    isExistValidate?: boolean,
    @Query('isActiveValidate', new DefaultValuePipe(false), ParseBoolPipe)
    isActiveValidate?: boolean,
    @Query('isCancelledValidate', new DefaultValuePipe(false), ParseBoolPipe)
    isCancelledValidate?: boolean,
    @Query(
      'hasSlotsForPlayerValidate',
      new DefaultValuePipe(false),
      ParseBoolPipe,
    )
    hasSlotsForPlayerValidate?: boolean,
  ) {
    const validationConfig: RoomValidationConfig = {
      isExist: isExistValidate,
      isActive: isActiveValidate,
      isCancelled: isCancelledValidate,
      hasSlotsForPlayer: hasSlotsForPlayerValidate,
    };
    const room = this.roomService.getByCode(code, validationConfig);
    return room;
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

  @Post('wait')
  waitRoom(@Body() waitRoomDto: WaitRoomDto) {
    const { code, playerName } = waitRoomDto;
    return this.roomService.waitRoom(code, playerName);
  }
}
