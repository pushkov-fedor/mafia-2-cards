import { IsLessThanConstraint } from './../../shared/validation-constraints/is-less-than.constraint';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  Validate,
  ValidateBy,
} from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty({
    message: 'Имя не должно быть пустым',
  })
  @IsString({
    message: 'Имя должно быть строкой',
  })
  creatorName: string;

  @IsNotEmpty({
    message: 'Количество игроков не доллжно быть пустым',
  })
  @IsNumber(
    {},
    {
      message: 'Коилчество игроков должно быть числом',
    },
  )
  @Min(4, {
    message: 'Должно быть минимум 4 игрока',
  })
  players: number;

  @IsNotEmpty({
    message: 'Количество мафии не доллжно быть пустым',
  })
  @IsNumber(
    {},
    {
      message: 'Количество мафии должно быть числом',
    },
  )
  @Min(1, {
    message: 'Должно быть минимум 1 мафия',
  })
  @Validate(IsLessThanConstraint, ['players'], {
    message: 'Мафии должно быть меньше чем игроков',
  })
  mafia: number;

  @IsNotEmpty({
    message: 'Количество комиссаров не доллжно быть пустым',
  })
  @IsNumber(
    {},
    {
      message: 'Количество комиссаров должно быть числом',
    },
  )
  @Min(0, {
    message: 'Количестов комиссаров не может быть отрицательным числом',
  })
  @Max(1, {
    message: 'Максимум может быть только 1 комиссар',
  })
  polices: number;
}
