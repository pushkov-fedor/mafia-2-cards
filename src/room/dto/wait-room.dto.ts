import { IsNotEmpty, IsString } from 'class-validator';

export class WaitRoomDto {
  @IsNotEmpty({
    message: 'Код комнаты не должен быть пустым',
  })
  @IsString({
    message: 'Код комнаты должен быть строкой',
  })
  code: string;

  @IsNotEmpty({
    message: 'Имя не должно быть пустым',
  })
  @IsString({
    message: 'Имя должно быть строкой',
  })
  playerName: string;
}
