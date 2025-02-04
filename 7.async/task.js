class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {

    if (time === null || callback === null) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    
    if (this.alarmCollection.includes(time)) {
      console.warn('Уже присутствует звонок на это же время');
      return;
    }

    // callback();

    this.alarmCollection.push({callback: () => {}, time, canCall: true});
  }
}

const clock = new AlarmClock();

clock.addClock("16:45");

console.log(clock.alarmCollection);

console.log(clock.alarmCollection['time']);

