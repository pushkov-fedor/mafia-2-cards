import { DayStage } from './day-stage.model';

export class Day {
  dayRoutine: DayStage[] = [
    DayStage.CitizenWelcome,
    DayStage.MafiaKill,
    DayStage.PoliceCheck,
    DayStage.CardRevealRequest,
    DayStage.CitizenKill,
    DayStage.CardRevealRequest,
    DayStage.Finish,
  ];
  dayLog: string[];
  currentStageIndex: number;
  killedByCitizenKillStage: string;
  killedByMafiaKillStage: string;
}
