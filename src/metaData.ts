const obj = {
  name: 'kkk',
};

// 读取对象属性值
console.log(Reflect.get(obj, 'name'));
// 获取对象所有key
console.log(Reflect.ownKeys(obj));
// 获取对象属性描述符
console.log(Reflect.getOwnPropertyDescriptor(obj, 'name'));

class User {
  eat() {
    console.log('eating');
  }
}
