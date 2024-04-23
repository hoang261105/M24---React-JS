function parameterValidator(validationFn) {
    return function (target, property, descriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args) {
            if (validationFn(...args)) {
                return originalMethod.apply(this, args);
            } else {
                throw new Error('Invalid parameters');
            }
        };

        return descriptor;
    };
}

function validateNumberParameter(param) {
    return typeof param === 'number';
}

class MyClass {
    @parameterValidator(validateNumberParameter)
    myMethod(param1, param2) {
        // Xử lý công việc của phương thức
        // ...
        return "Hello, world!";
    }
}

const instance = new MyClass();
console.log(instance.myMethod(42, 123)); // Kết quả: Hello, world!
console.log(instance.myMethod("abc", 123)); // Lỗi: Invalid parameters