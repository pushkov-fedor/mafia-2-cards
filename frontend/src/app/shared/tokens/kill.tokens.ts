import { InjectionToken } from '@angular/core';
import { Citizen } from '../models/citizen.model';

export const KILL_MODAL_CITIZENS = new InjectionToken<Citizen[]>(
  'KILL_MODAL_CITIZENS',
);
export const KILL_MODAL_CLOSE = new InjectionToken<() => void>(
  'KILL_MODAL_CLOSE',
);
