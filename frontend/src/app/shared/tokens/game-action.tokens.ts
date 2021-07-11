import { InjectionToken } from '@angular/core';
import { ActionType } from '../models/action.modal';
import { Citizen } from '../models/citizen.model';

export const GAME_ACTION_MODAL_CITIZENS = new InjectionToken<Citizen[]>(
  'GAME_ACTION_MODAL_CITIZENS',
);
export const GAME_ACTION_MODAL_CLOSE = new InjectionToken<() => void>(
  'GAME_ACTION_MODAL_CLOSE',
);
export const GAME_ACTION_MODAL_ROOM_CODE = new InjectionToken<string>(
  'GAME_ACTION_MODAL_ROOM_CODE',
);
export const GAME_ACTION_MODAL_ACTION_TYPE = new InjectionToken<ActionType>(
  'GAME_ACTION_MODAL_ACTION_TYPE',
);
export const GAME_ACTION_MODAL_MY_CITIZEN = new InjectionToken<Citizen>(
  'GAME_ACTION_MODAL_MY_CITIZEN',
);
