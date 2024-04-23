function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const timingMethod = descriptor.value;
    descriptor.value = function (...args) {
        const begin = performance.now();
        const result = timingMethod.apply(this, args);

        const end = performance.now();
        const time = end - begin;
        console.log(`${propertyKey}`);
        console.log(`${JSON.stringify(args)}`);
        console.log(`${time}`);
        console.log(`${JSON.stringify(result)}`);
    }
}
class MyClass {
    @timingDecorator
    myMethod(param1, param2) {

        return `${param1}, ${param2}`;
    }
}

const instance = new MyClass();
instance.myMethod("abc", 123);