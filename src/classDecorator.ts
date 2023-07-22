import { CreateRunDecorator } from './decorator';

@CreateRunDecorator('Car')
class Car {
  [key: string]: any;
}

const car = new Car();
car.run();