function cachingDecorator(target, property, descriptor) {
    const originalMethod = descriptor.value;
    const cache = {};

    descriptor.value = function (...args) {
        const cacheKey = JSON.stringify(args);

        if (cache.hasOwnProperty(cacheKey)) {
            console.log('Returning cached result...');
            return cache[cacheKey];
        }

        const result = originalMethod.apply(this, args);
        cache[cacheKey] = result;

        console.log('Calculating and caching result...');
        return result;
    };

    return descriptor;
}

class MyClass {
    @cachingDecorator
    myMethod(param1, param2) {
        // Kiểm tra cache và tính toán kết quả nếu cần
        // ...
        // Trả về kết quả
        return "Hello, world!";
    }
}

const instance = new MyClass();
console.log(instance.myMethod("abc", 123)); // Kết quả mới tính toán và lưu vào cache
console.log(instance.myMethod("abc", 123)); // Trả về kết quả từ cache, không tính toán lại