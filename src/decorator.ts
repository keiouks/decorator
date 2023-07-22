// 类装饰器
export const CreateRunDecorator = (who: string) => {
  return <T extends new (...args: any[]) => any>(
    constructor: T,
  ) => {
    console.log('RunDecorator');
    return class extends constructor {
      run() {
        console.log(`${who} runing`);
      }
    }
  }
}

// 类方法的装饰器
export function logSome(
  target: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
) {
  console.log('logSome');
  const method = propertyDescriptor?.value;
  propertyDescriptor.value = function(...args: any[]) {
    console.log(`method ${propertyName} begin run`);
    return method.apply(this, args);
  }
  return propertyDescriptor;
}