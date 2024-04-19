let generic = <T>(param: T) => {
    return "Trả về 1 giá trị";
}

console.log(generic(1));
console.log(generic("hoàng"));
console.log(generic(null));
console.log(generic(undefined));