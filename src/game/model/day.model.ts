import { DayStage } from './day-stage.model';

export class Day {
  dayRoutine: DayStage[] = [
    DayStage.CitizenWelcome,
    DayStage.MafiaKill,
    DayStage.PoliceCheck,
    DayStage.CardRevealRequest,
    DayStage.CardRevealResult,
    DayStage.CitizenKill,
    DayStage.CardRevealRequest,
    DayStage.CardRevealResult,
    DayStage.Finish,
  ];
  dayLog: string[] = [];
  currentStageIndex = 0;
  killedByCitizenKillStage: string;
  killedByMafiaKillStage: string;

  get currentStage() {
    return this.dayRoutine[this.currentStageIndex];
  }

  nextStage(numberOfMafia: number, numberOfPolices: number) {
    this.currentStageIndex++;
    if (this.currentStage == DayStage.PoliceCheck && numberOfPolices == 0) {
      this.nextStage(numberOfMafia, numberOfPolices);
    }
    if (this.currentStage == DayStage.CardRevealRequest) {
      this.log('Ждем вскрытия карт');
    }
  }

  log(message) {
    this.dayLog.push(message);
  }
}
