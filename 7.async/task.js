class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    // time = new Date().toTimeString("ru-Ru", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });

    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.some((setClock) => setClock.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
      return;
    }

    this.alarmCollection.push({ time, callback, canCall: true });
  }

  removeClock(time) {
    if (
      (this.alarmCollection = this.alarmCollection.filter(
        (setClock) => setClock.time !== time
      ))
    ) {
      return;
    }
  }
}

const clock = new AlarmClock();

const callback = (f) => f;

clock.addClock("16:45", callback);
clock.addClock("16:45", callback);
clock.addClock("16:46", callback);
clock.removeClock("16:45");

console.log(clock.alarmCollection);
console.log(clock.alarmCollection.length);
