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

    this.alarmCollection.push({ time, callback, canCall: true });
  }

  removeClock(time) {
    if ((this.alarmCollection = this.alarmCollection.filter(
        (setClock) => setClock.time !== time))
    ) {
      return;
    }
  }

  getCurrentFormattedTime() {
    const localTime = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return localTime;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(() => {
      const localTime = this.getCurrentFormattedTime();

      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === localTime && alarm.canCall) {
          alarm.callback();
          alarm.canCall = false;
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    if (this.alarmCollection.forEach((alarm) => (alarm.canCall = true))) {
      return alarm.canCall;
    }
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const clock = new AlarmClock();

const callback = (f) => f;

clock.addClock("16:45", callback);
clock.addClock("16:45", callback);
clock.addClock("16:45", callback);
console.log(clock.alarmCollection.length);

clock.clearAlarms();
console.log(clock.alarmCollection.length);