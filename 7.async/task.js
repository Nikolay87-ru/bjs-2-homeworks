class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.some((setClock) => setClock.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
      return;
    }

    this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(time) {
    if (
      this.alarmCollection.some((setClock) => {
        if (setClock.time === time) {
          setClock.time = null;
        }
      })
    ) {
      return;
    }
  }
}

const clock = new AlarmClock();

const callback = (f) => f;

clock.addClock("16:45", callback);
clock.addClock("16:45", callback);

console.log(clock.alarmCollection);

clock.removeClock("16:45");

console.log(clock.alarmCollection);
