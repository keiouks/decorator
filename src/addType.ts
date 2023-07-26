import 'reflect-metadata';

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const typeL = Reflect.getMetadata('design:paramtypes', target, propertyKey);
  if (typeL[0] === String) {
    console.log('eat method need string params');
  } else {
    console.log('eat method need not string params');
  }
}

class User {
  @log
  @Reflect.metadata('design:paramtypes', [String, String])
  eat(str1: string, str2: string) {
    console.log(str1, str2);
  }
}