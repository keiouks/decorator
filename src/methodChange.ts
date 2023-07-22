import { logSome } from './decorator';

class Car {
  @logSome
  run() {
    console.log('Car running');
  }
}

(new Car()).run();
