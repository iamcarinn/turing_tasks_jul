const squarePow = (number, callback) => {
    return callback(callback(number))
};

console.log(squarePow(3, (num) => num*num));
