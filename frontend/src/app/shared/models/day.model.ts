import { DayStage } from './day-stage.model';

export class Day {
  dayRoutine: DayStage[] = [
    DayStage.CitizenWelcome,
    DayStage.CitizenKill,
    DayStage.CardRevealRequest,
    DayStage.CardRevealResult,
    DayStage.MafiaKill,
    DayStage.PoliceCheck,
    DayStage.CardRevealRequest,
    DayStage.CardRevealResult,
    DayStage.Finish,
  ];
  currentStageIndex: number;
  killedByCitizenKillStage: string;
  killedByMafiaKillStage: string;
}
