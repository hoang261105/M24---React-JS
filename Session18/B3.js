"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    myMethod(param1, param2) {
        // Kiểm tra cache và tính toán kết quả nếu cần
        // ...
        // Trả về kết quả
        return "Hello, world!";
    }
}
__decorate([
    cachingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "myMethod", null);
const instance = new MyClass();
console.log(instance.myMethod("abc", 123)); // Kết quả mới tính toán và lưu vào cache
console.log(instance.myMethod("abc", 123)); // Trả về kết quả từ cache, không tính toán lại
