function decorMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const functionName = propertyKey;
        const inputParam = args;
        const ans = originalMethod.apply(this, args);

        console.log(`${functionName}`);
        console.log(`${inputParam}`);
        console.log(ans);

        return ans;
    }
    return descriptor;
}

class New {
    @decorMethod
    someMethod(obj1: string, obj2: string): string {
        return `${obj1}, ${obj2}`;
    }
}

const newObj = new New();
newObj.someMethod("Hello", "2");