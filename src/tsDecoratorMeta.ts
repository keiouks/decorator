import { logSome, CreateRunDecorator, logAccess } from './decorator';
@CreateRunDecorator('shit')
class Car {

  _seatCount = 5;

  @logSome
  run() {
    console.log('Car running');
  }

  @logAccess
  get seat() {
    return this._seatCount;
  }
}