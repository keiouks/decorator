// 需要引入库
import 'reflect-metadata';

const metaKey = 'eat-key';
const metaValue = {speed: 'fast'};

const classMetaKey = 'fix-key';
const classMetaValue = {view: 'far'};

// 用装饰器给类添加元数据
@Reflect.metadata(classMetaKey, classMetaValue)
class Someone {
  // 用装饰器给类实例方法添加元数据
  @Reflect.metadata(metaKey, metaValue)
  eat() {
    console.log('eating');
  }
}

class User {
  eat() {
    console.log('eating');
  }
}
// 用方法而不是装饰器给类实例方法添加元数据
Reflect.defineMetadata(metaKey, metaValue, User.prototype, 'eat');
// 用方法而不是装饰器给类添加元数据
Reflect.defineMetadata(classMetaKey, classMetaValue, User);

// 给实例方法添加的元素数只能到实例或原型获取
console.log(Reflect.getMetadata(metaKey, new User(), 'eat'));
console.log(Reflect.getMetadata(metaKey, User.prototype, 'eat'));
console.log(Reflect.getMetadata(metaKey, new Someone(), 'eat'));
console.log(Reflect.getMetadata(metaKey, Someone.prototype, 'eat'));

console.log(Reflect.getMetadata(classMetaKey, User));
console.log(Reflect.getMetadata(classMetaKey, Someone));