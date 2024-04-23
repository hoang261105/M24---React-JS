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
function timingDecorator(target, propertyKey, descriptor) {
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
    };
}
class MyClass {
    myMethod(param1, param2) {
        return `${param1}, ${param2}`;
    }
}
__decorate([
    timingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "myMethod", null);
const instance = new MyClass();
instance.myMethod("abc", 123);
