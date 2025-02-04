class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    // time = new Date().setHours(hour, minute);

    if (time === null && callback === null) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    
    if (this.alarmCollection.includes(time)) {
      console.warn('Уже присутствует звонок на это же время');
      return;
    }

    this.alarmCollection.push({callback: func(), time: this.time, canCall: true});
  }
}

const clock = new AlarmClock();

clock.addClock("16:45", callback);

console.log(alarmCollection);