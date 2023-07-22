import { logSome, CreateRunDecorator } from './decorator';
@CreateRunDecorator('shit')
class Car {
  @logSome
  run() {
    console.log('Car running');
  }
  @logSome
  eat() {
    console.log('Car eating');
  }
}