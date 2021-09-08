function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

let carriedSum = curry(sum);

console.log( carriedSum(1)(2) );