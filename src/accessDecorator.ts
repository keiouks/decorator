import { logAccess } from './decorator';
class User {
  private _age: number;
  constructor(age: number) {
    this._age = age;
  }
  @logAccess
  get age() {
    return this._age;
  }
}